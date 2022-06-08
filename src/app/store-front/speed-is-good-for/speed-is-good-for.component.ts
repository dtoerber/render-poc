import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speed-is-good-for',
  templateUrl: './speed-is-good-for.component.html',
  styleUrls: ['./speed-is-good-for.component.scss'],
})
export class SpeedIsGoodForComponent implements OnInit {
  /**
   * Heading for Speed Is Good For section
   */
  @Input() speedIsGoodForBulletsHeadline: string = 'Speed Is Good For';
  @Input() listItems: string[] = [
    'HD streaming on multiple devices',
    'Online gaming',
    'Downloading shows, movies and large files',
    'Supporting multiple connected smart home devices',
  ];

  constructor() {}

  ngOnInit(): void {}
}
