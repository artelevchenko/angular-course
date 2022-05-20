import {Component} from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  
  title = "Hello!"
  number = 30
  inputText = ""

  onInput(event: any) {
    this.inputText = event.target.value
  }
  onclick() {
    this.number +=1
  }

}