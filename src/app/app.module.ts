import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import { DemoComponent } from './demo/demo.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateOutletComponent,
    DemoComponent
  ],
  entryComponents: [
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
