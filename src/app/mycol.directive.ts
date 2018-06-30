import { Directive } from '@angular/core';
import {Renderer,ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appMycol]'
})
export class MycolDirective {

  constructor(private ren: Renderer, private ele : ElementRef) { }

  @HostListener('mouseover') x(){
    console.log('mouseover')
    this.ren.setElementStyle(this.ele.nativeElement,'color','red');
  }

}
