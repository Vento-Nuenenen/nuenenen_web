import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-abteilung-card',
  templateUrl: './abteilung-card.component.html',
  styleUrls: ['./abteilung-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbteilungCardComponent {
  @Input() title = '';
  @Input() imagePath = '';
  @Input() link = '';
}
