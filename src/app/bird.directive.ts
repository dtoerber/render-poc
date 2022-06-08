import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './components/field/field.component';

@Directive({
  selector: '[appBird]',
})
export class BirdDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.birdTemplate = templateRef;
  }
}
