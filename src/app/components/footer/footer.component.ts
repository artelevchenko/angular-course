import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  title = "hello";
  baColor: any = false;
  arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

  onInput(event: any) {
    this.title = event.target.value
  }

}
