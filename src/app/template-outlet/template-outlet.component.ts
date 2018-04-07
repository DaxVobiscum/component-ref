import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  Type,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';

import { TemplateComponent, TemplateContext } from '../model';

@Component({
  selector: 'app-template-outlet',
  template: `
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  `
})
export class TemplateOutletComponent implements OnInit, OnDestroy {

  @Input() component: Type<TemplateComponent>;
  @Input() context: TemplateContext;

  template: TemplateRef<TemplateContext>;

  cInstance: TemplateComponent;

  constructor(
    private cfResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  ngOnInit() {
    const tcFactory: ComponentFactory<TemplateComponent> = this.cfResolver.resolveComponentFactory(this.component);
    this.cInstance = tcFactory.create(this.injector).instance;
    setTimeout(() => {
      this.cInstance.ngOnInit();
      this.cInstance.setContext(this.context);
      this.template = this.cInstance.getTemplate();
    });
  }

  ngOnDestroy() {
    if (this.cInstance) {
      this.cInstance.ngOnDestroy();
    }
  }

}
