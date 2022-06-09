import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './field/field.component';

@Directive({
  selector: '[appCow]',
})
export class CowDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.cowTemplate = templateRef;
  }
}
