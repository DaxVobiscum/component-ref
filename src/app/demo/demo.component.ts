import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';

import { TemplateComponent, TemplateContext } from '../model';

@Component ({
  selector: 'app-demo-component',
  template: `
    <ng-template>
      <div>{{ name }}: {{ getCount() }}</div>
      <div>
        <div>Default Context:</div>
        <div>{{ defaultContext | json }}</div>
      </div>
      <div>
        <div>Template Context:</div>
        <div>{{ templateContext | json }}</div>
      </div>
    </ng-template>
  `
})
export class DemoComponent extends TemplateComponent implements OnInit, OnDestroy {

  name = 'Test Component';

  count = 0;

  private interval: any;

  constructor() {
    super();
    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngOnInit() { }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getCount() {
    return this.count;
  }
}
