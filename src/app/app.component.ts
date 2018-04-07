import { Component, QueryList, ViewChildren } from '@angular/core';

import { TemplateOutletComponent } from './template-outlet/template-outlet.component';

import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren(TemplateOutletComponent) outlets: QueryList<TemplateOutletComponent>;

  component = DemoComponent;

  contextA = {
    $implicit: {
      foo: 'bar',
      test: 'test'
    },
    other: 'value'
  };

  contextB = {
    $implicit: {
      foo: 'baz',
      test: 'case'
    },
    other: 'thing'
  };

  destroyOutlets() {
    this.outlets.forEach(outlet => outlet.ngOnDestroy());
    console.log('Outlets destroyed.');
  }
}
