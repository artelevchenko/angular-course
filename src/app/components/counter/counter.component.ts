import { Component } from '@angular/core';
import { AppCounterService } from 'src/app/services/app-counter.service';
import { LocalCounterService } from 'src/app/services/local-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalCounterService]
})
export class CounterComponent  {

  constructor(public appCounterService: AppCounterService,
    public localCounterService: LocalCounterService) {}


}
