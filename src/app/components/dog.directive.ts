import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './field/field.component';

@Directive({
  selector: '[appDog]',
})
export class DogDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.dogTemplate = templateRef;
  }
}
