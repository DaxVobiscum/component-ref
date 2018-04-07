import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Injector,
  TemplateRef,
  Type,
  ViewContainerRef,
  Input,
  OnInit
} from '@angular/core';

import { BaseComponent } from '../model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(
    private cfResolver: ComponentFactoryResolver,
    private cRef: ViewContainerRef,
    private injector: Injector
  ) { }

  ngOnInit() {
  }

  createComponent(component: Type<BaseComponent>) {
    const tcFactory: ComponentFactory<BaseComponent> = this.cfResolver.resolveComponentFactory(component);
    const cInstance: BaseComponent = tcFactory.create(this.injector).instance;
    setTimeout(() => {
      const template: TemplateRef<any> = cInstance.getTemplate();
      if (template) {
        this.cRef.createEmbeddedView(template);
      } else {
        console.log('No template :(');
      }
    });
  }

}
