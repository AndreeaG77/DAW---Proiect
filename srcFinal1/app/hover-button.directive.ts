import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverButton]'
})
export class HoverButtonDirective {

  constructor(
    public elem: ElementRef,
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightAndBold('aquamarine', 'bolder');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightAndBold('', '');
  }

  private highlightAndBold(color: string, weight: string) {
    this.elem.nativeElement.style.backgroundColor = color;
    this.elem.nativeElement.style.fontWeight = weight;
  }

}
