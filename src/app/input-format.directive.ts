import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el :ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log("focused")
  }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase()
  }

}
