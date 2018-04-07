import { Component, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseComponent, TemplateContext } from './model';

@Component ({
  selector: 'app-test-component',
  template: `
    <ng-template #template>
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
export class TestComponent extends BaseComponent implements AfterViewInit, OnDestroy {

  name = 'Test Component';

  count = 0;

  private interval: any;

  constructor() {
    super();
    this.interval = setInterval(() => {
      this.count++;
    }, 1000);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  getCount() {
    return this.count;
  }
}
