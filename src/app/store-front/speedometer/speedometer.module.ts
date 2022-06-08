import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpeedometerComponent } from './speedometer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpeedometerComponent],
  exports: [SpeedometerComponent],
})
export class SpeedometerModule {}
