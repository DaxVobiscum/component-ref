import { Component } from '@angular/core';
import { BaseComponent } from './model';

@Component ({
  selector: 'app-test-component',
  template: `
    <ng-template #template>
      <div>Test component works!</div>
    </ng-template>
  `
})
export class TestComponent extends BaseComponent { }
