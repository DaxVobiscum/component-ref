import { Component, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import { BuilderComponent } from './builder/builder.component';

import { TestComponent } from './test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(BuilderComponent) builders: QueryList<BuilderComponent>;

  title = 'app';
  component = TestComponent;

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
      test: 'success'
    },
    other: 'Benjamin Linus'
  };

  ngAfterViewInit() {
    setTimeout(() => {
      this.builders.forEach(builder => builder.createComponent(this.component));
    });
  }

  killBuilders() {
    this.builders.forEach(builder => builder.ngOnDestroy());
  }
}
