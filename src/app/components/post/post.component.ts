import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Post } from 'src/app/app.component'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{

  @Input() post!: Post;
  @ContentChild('info', {static: true}) infoRef!: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngOnChanges')
  }
  ngOnInit() {
    //console.log('ngOnInit')
    //console.log(this.infoRef.nativeElement)
  }
  ngDoCheck(): void {
    //console.log('ngDoCheck')
  }
  ngAfterContentInit(): void {
    //console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    //console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    //console.log('gOnDestroy')
  }

}
