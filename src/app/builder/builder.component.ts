import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  Type,
  ViewContainerRef,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

import { BaseComponent, TemplateContext } from '../model';

@Component({
  selector: 'app-builder',
  template: `
    <ng-container *ngTemplateOutlet="template; context: templateContext"></ng-container>
  `,
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit, OnDestroy {

  template: TemplateRef<TemplateContext>;
  templateContext: TemplateContext;

  cInstance: BaseComponent;

  constructor(
    private cfResolver: ComponentFactoryResolver,
    private cRef: ViewContainerRef,
    private injector: Injector
  ) {
    this.templateContext = {
      $implicit: {
        foo: 'bar',
        test: 'test'
      },
      other: 'value'
    };
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.cInstance) {
      this.cInstance.ngOnDestroy();
    }
  }

  createComponent(component: Type<BaseComponent>) {
    const tcFactory: ComponentFactory<BaseComponent> = this.cfResolver.resolveComponentFactory(component);
    this.cInstance = tcFactory.create(this.injector).instance;
    setTimeout(() => {
      this.cInstance.ngAfterViewInit();
      this.cInstance.setContext(this.templateContext);
      this.template = this.cInstance.getTemplate();
      if (!this.template) {
        console.log('No template :(');
      }
    });
  }

}
