import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
 // styleUrls: ['./app.component.css']
})
export class App {
  bgColor='yellow';
  show = true;
  changeStatus(){
    this.show = !this.show;
    
  }
}
