import { Component } from '@angular/core';

import { Cv } from "./CvProjet/cv/cv";
import { Test } from "./directive/test/test";


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [Cv, Test],
  templateUrl: './app.html',
 // styleUrls: ['./app.component.css']
})
export class App {
  
}
