import { Directive ,TemplateRef,ViewContainerRef,Input } from '@angular/core';
@Directive({
  selector: '[appMyboss]'
})
export class MybossDirective {

  constructor(private tem:TemplateRef<any>,private con: ViewContainerRef) { }
  @Input ('appMyboss')   set x (bol :boolean){
    this.con.createEmbeddedView(this.tem)
  }

}
