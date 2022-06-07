import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './components/field/field.component';

@Directive({
  selector: '[appDog]',
})
export class DogDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.dogTemplate = templateRef;
  }
}
