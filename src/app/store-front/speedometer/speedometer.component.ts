import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export enum SpeedometerFillValues {
  ZERO = 'zero',
  QUARTER = 'quarter',
  HALF = 'half',
  THREEQTR = 'threeQtr',
  FULL = 'full',
}

@Component({
  selector: 'spectrum-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedometerComponent {
  @Input() ringFillPercent: SpeedometerFillValues = SpeedometerFillValues.HALF;
  @Input() textHeadline: string = '';
  @Input() textValue: string = ''; // TODO: check if this value is coming back as a number and if so convert the type
  @Input() textUnits: string = '';
  @Input() screenReaderUnits: string = '';
  @Input() animateTextChange: boolean = false;

  // TODO: if we ever find a good way to pull values from SCSS we could make the animation configurable
  // @Input() animateTimeMs: number = 1000;

  // this value needs to match $animationTime in the SCSS
  // so text and line animations are in sync
  public readonly animateTimeMs: number = 1000;

  // enum template access
  public speedometerFillValues = SpeedometerFillValues;
}
