import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {
  constructor(private el: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }

  @Input()
  set appRepeatOf(number) {
    for (let i = 1; i <= number; i++) {
      this.viewContainer.createEmbeddedView(this.el, {
        $implicit: i
      })
    }
  }
}
