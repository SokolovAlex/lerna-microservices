import { Injectable } from '@angular/core';
import manifest from '../../assets/manifest';
const widgets = manifest.widgets;

interface IScript {
    name?: string;
    vendor?: boolean;
    src: string;
    loaded?: boolean;
    status?: string;
}

export interface ILoadedWidget {
    scripts?: IScript[];
    status: any[];
    widget?: IWidget;
}

@Injectable()
export class  ScriptService {
    private scripts: {[key: string]: IScript } = {};

    load(widgetName): Promise<ILoadedWidget> {
        const promises: any[] = [];
        const scripts = widgets[widgetName].scripts;
        if (!scripts) {
            return Promise.resolve({ status: ['module not founded'] });
        }
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises).then((statuses) => {
            const widget = window.widgets[widgetName];
            return { status: statuses, widget, scripts };
        });
    }

    loadScript(scriptInfo: IScript) {
        this.scripts[scriptInfo.name] = scriptInfo;
        return new Promise<any>((resolve, reject) => {
            if (scriptInfo.loaded) {
                resolve({script: scriptInfo, status: 'Already Loaded'});
            } else {
                const script = <any>document.createElement('script');
                script.type = 'text/javascript';
                script.src = scriptInfo.src;
                script.onload = () => {
                    scriptInfo.loaded = true;
                    resolve({script: scriptInfo, status: 'Loaded'});
                };
                script.onerror = () => resolve({script: scriptInfo, status: 'Loaded'});
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }

}