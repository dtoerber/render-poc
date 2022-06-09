import { Injectable } from '@angular/core';

import { AppAComponent } from './app-a/app-a.component';
import { AppBComponent } from './app-b/app-b.component';
import { WidgetItem } from './widget-item';

@Injectable()
export class WidgetService {
  getWidgets() {
    return [
      new WidgetItem(AppAComponent, { name: 'App A', data: 'app a data' }),
      new WidgetItem(AppBComponent, { name: 'App B', data: 'app b data' }),
    ];
  }
}
