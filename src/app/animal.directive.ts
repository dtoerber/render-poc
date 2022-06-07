import { Directive, TemplateRef } from '@angular/core';
import { FieldComponent } from './components/field/field.component';

@Directive({
  selector: '[appAnimal]',
})
export class AnimalDirective {
  constructor(templateRef: TemplateRef<void>, field: FieldComponent) {
    field.animalTemplate = templateRef;
  }
}
