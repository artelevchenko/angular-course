import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set IfNot(condition: boolean) {
    if (condition) {
      this.viewConteiner.clear()
    } else {
      this.viewConteiner.createEmbeddedView(this.templateRef)
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewConteiner: ViewContainerRef) { }

}
