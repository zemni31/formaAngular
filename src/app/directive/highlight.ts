import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true 
})
export class Highlight {
@HostBinding ('style.backgroundColor') bg: string = '';

  constructor() {}
    @HostListener('mouseenter') mouseenter(){
      this.bg = 'yellow';
    }
    @HostListener('mouseleave') mouseleave(){
      this.bg = 'green';
    }

  

}
