import fg from 'fast-glob';
import { join } from 'path';
import prettier from 'prettier';
import fs from 'fs';
import { commonAssets } from '../paths';
import { version } from '../package.json';

(async () => {
    const manifests = await fg(['packages/**/manifest.ts', "!packages/angular-main/**/manifest.ts"]);
    const commonManifest = manifests.reduce((acc, manifestPath) => {
        const manifestModule = require(`../${manifestPath}`);
        acc.widgets[manifestModule.name] = manifestModule;
        return acc;
    }, { widgets: {}, version });

    fs.writeFileSync(join(commonAssets, 'manifest.ts'), 
        prettier.format('export default ' + JSON.stringify(commonManifest)));
})()
