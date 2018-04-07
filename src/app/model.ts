import { TemplateRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

export class TemplateContext {
  $implicit?: DefaultContext;
  other?: any;
}

export abstract class BaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('template') template: TemplateRef<any>;
  defaultContext: DefaultContext;
  templateContext: TemplateContext;
  getTemplate(): TemplateRef<any> {
    return this.template;
  }
  abstract ngAfterViewInit(): void;
  abstract ngOnDestroy(): void;
  setContext(context: TemplateContext) {
    const { $implicit: defaultContext, ...templateContext } = context;
    this.defaultContext = defaultContext;
    this.templateContext = templateContext;
  }
}
