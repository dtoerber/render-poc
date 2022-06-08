import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  public birdTemplate!: TemplateRef<void>;
  public catTemplate!: TemplateRef<void>;
  public dogTemplate!: TemplateRef<void>;
  public cowTemplate!: TemplateRef<void>;
}
