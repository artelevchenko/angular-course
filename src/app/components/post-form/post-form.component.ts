import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput') titleRef!: ElementRef
  @ViewChild('textInput') textRef!: ElementRef

  title = ""
  text = ""

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = ""
    }
  }

  focusTitle() {
    this.titleRef.nativeElement.focus()
  }

  focusText() {
    this.textRef.nativeElement.focus()
  }

}