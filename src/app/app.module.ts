import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    TestComponent
  ],
  entryComponents: [
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
