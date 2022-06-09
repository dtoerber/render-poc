import {
  Component,
  ComponentRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Widget } from '../models/widget';

@Component({
  selector: 'app-cms-widget',
  template: `<ng-template #cmsWidget></ng-template>`,
})
export class CmsWidgetComponent implements OnInit {
  @ViewChild('cmsWidget', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() widget!: Widget;

  componentRef!: ComponentRef<any>;

  ngOnInit(): void {
    this.componentRef = this.container.createComponent(this.widget.component);
  }
}
