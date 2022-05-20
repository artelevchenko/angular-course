import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService]
})
export class AppComponent implements OnInit{

  constructor(public appCounterService: AppCounterService,
              public localCounterService: LocalCounterService) {}

  e: number = Math.E
  str = 'hello world'
  date: Date = new Date()
  float = 0.42

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        f: 3
      }
    }
  }

  isVisiable = true;

  search = ''
  searchField: keyof Post = 'title'

  posts: Post[] = [
    {title:"First post", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Angular", id:1},
    {title: "Second post", text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit.", id:2}
  ]

  updatePosts(post: Post) {
    this.posts.push(post)
  }

  addPost() {
    this.posts.push({
      title: 'Angular 12',
      text: 'Hello Angular World!'
    })
  }

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    }, 5000)
  })

  myDate$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    }, 2500)
  })

  nowDate: Date | undefined

  ngOnInit(): void {
    this.myDate$.subscribe(date => {
      this.nowDate = date
    })
  }
}
