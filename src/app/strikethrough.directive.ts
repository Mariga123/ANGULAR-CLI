import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {


  constructor(private elem: ElementRef){}

  // tslint:disable-next-line: typedef
  @HostListener('click') onClicks(){
    this.textDeco('line-through');
  }

  // tslint:disable-next-line: typedef
  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('None');
  }

  // tslint:disable-next-line: typedef
  private textDeco(action: string){
    this.elem.nativeElement.style.textDecoration = action;

  }
}
