import { Component } from '@angular/core';

import { Cv } from "./CvProjet/cv/cv";


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [ Cv],
  templateUrl: './app.html',
 // styleUrls: ['./app.component.css']
})
export class App {
  
}
