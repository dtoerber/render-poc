import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './field/field.component';

@Directive({
  selector: '[appCat]',
})
export class CatDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.catTemplate = templateRef;
  }
}
