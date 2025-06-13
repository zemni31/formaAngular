import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
  standalone: true
})
export class Rainbow {
colors= ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet','pink','brown','purple','lightblue','grey','cyan','magenta'];
@HostBinding('style.borderColor') bc :string='';
@HostBinding('style.color') color :string='';

  constructor() { }
  @HostListener('keypress') changeColor() {

const index1=Math.floor(Math.random()* this.colors.length-1);
    const index2=Math.floor(Math.random()* this.colors.length-1);
    this.bc= this.colors[index1];
    this.color= this.colors[index2];
}
}