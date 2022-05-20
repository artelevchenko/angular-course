import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {

  title = "Hello dog";

  constructor() {
    setTimeout(() => {
      this.title = "Hello Pig!"
    }, 10000)
  }


}
