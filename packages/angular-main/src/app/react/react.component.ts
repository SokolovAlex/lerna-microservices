import { ScriptService } from './../services/scriptService';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  private scripts: any = {};

  constructor(private scriptService: ScriptService, private element: ElementRef) {}

  ngOnInit() {
    this.scriptService.load('react-module').then((loadedWidget) => {

      loadedWidget.widget.mount(this.element.nativeElement);
      
    });
  }
}
