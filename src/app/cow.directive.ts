import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './components/field/field.component';

@Directive({
  selector: '[appCow]',
})
export class CowDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.cowTemplate = templateRef;
  }
}
