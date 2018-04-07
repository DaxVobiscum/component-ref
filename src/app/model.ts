import { TemplateRef, ViewChild } from '@angular/core';

export class BaseComponent {
  @ViewChild('template') private template: TemplateRef<any>;
  getTemplate(): TemplateRef<any> {
    return this.template;
  }  
}
