import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { BuilderComponent } from './builder/builder.component';

import { TestComponent } from './test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(BuilderComponent) builder: BuilderComponent;

  title = 'app';
  component = TestComponent;

  ngAfterViewInit() {
    setTimeout(() => {
      this.builder.createComponent(this.component);
    });
  }

  killme() {
    this.builder.ngOnDestroy();
  }
}
