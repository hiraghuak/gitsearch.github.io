import { Directive,ElementRef,Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[MydirectiveDirective]'})
  
export class MydirectiveDirective {
  constructor(private ele : ElementRef,private render : Renderer) { }

@HostListener('mouseover') mouseOver(){

  this.render.setElementStyle(this.ele.nativeElement,'color','red')
}
@HostListener('mouseout') mouseOut(){
  this.render.setElementStyle(this.ele.nativeElement,'color','blue')
}

}
