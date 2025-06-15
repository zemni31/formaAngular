import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';

import { Cv } from "./CvProjet/cv/cv";
import { Test } from "./directive/test/test";
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [Cv, Test, RouterOutlet, Header],
  templateUrl: './app.html',
 // styleUrls: ['./app.component.css']
})
export class App {
  
}
