// angular import
import { Component } from '@angular/core';

// project import

import { CardComponent } from '../../../theme/shared/components/card/card.component';

@Component({
  selector: 'app-sample-page',
  imports: [CardComponent],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent {}
