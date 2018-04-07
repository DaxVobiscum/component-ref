import { TemplateRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

export class TemplateContext {
  $implicit?: DefaultContext;
  other?: any;
}

export abstract class BaseComponent implements OnInit, OnDestroy {
  @ViewChild(TemplateRef) template: TemplateRef<TemplateContext>;
  defaultContext: DefaultContext;
  templateContext: TemplateContext;
  abstract ngOnInit(): void;
  abstract ngOnDestroy(): void;
  getTemplate(): TemplateRef<TemplateContext> {
    return this.template;
  }
  setContext(context: TemplateContext) {
    const { $implicit: defaultContext, ...templateContext } = context;
    this.defaultContext = defaultContext;
    this.templateContext = templateContext;
  }
}
