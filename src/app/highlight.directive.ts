import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core'

@Directive({
  selector: '[appHighlight]',
  exportAs: 'expAppHighlight'
})
export class HighlightDirective {

  @Input()
  appHighlight: string

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.addClassToRenderer()
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeToRendererClass()
  }

  // This is not recommended to modding dom element
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
    this.el.nativeElement.style.cursor = 'default'
  }

  private addClassToRenderer() {
    // To modifying dom element use renderer
    this.renderer.addClass(this.el.nativeElement, this.appHighlight)
  }

  private removeToRendererClass() {
    this.renderer.removeClass(this.el.nativeElement, this.appHighlight)
  }

}
