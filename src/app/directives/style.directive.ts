import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color: string = 'blue'
  @Input() fontWeight = 'normal'
  @Input() dStyles!: { border?: string; borderRadius?: string; }

  @HostBinding('style.color') elColor:any = null

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(elRef.nativeElement, "color", "blue")
    //elRef.nativeElement.style.color = 'green'
  }
  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event)
  }
  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', this.fontWeight)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'fontWeight', null,)
    this.renderer.setStyle(this.elRef.nativeElement, 'border', null)
    this.renderer.setStyle(this.elRef.nativeElement, 'borderRadius', null)
  }
}
