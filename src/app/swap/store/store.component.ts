import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { WidgetDirective } from '../widget.directive';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComponent implements OnInit {
  widgets = this.widgetService.getWidgets();
  @ViewChild(WidgetDirective, { static: true }) appWidget!: WidgetDirective;
  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.loadComponent(0);
  }

  loadComponent(idx: number) {
    const viewContainerRef = this.appWidget.viewContainerRef;
    viewContainerRef.clear();

    const widgetItem = this.widgets[idx];
    const componentRef = viewContainerRef.createComponent<WidgetComponent>(
      widgetItem.component
    );
    componentRef.instance.data = widgetItem.data;
  }
}
