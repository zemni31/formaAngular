import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';

import { Cv } from "./CvProjet/cv/cv";
import { Test } from "./directive/test/test";
import { Header } from "./header/header";
import { RouterSimulator } from "./router-simulator/router-simulator";


@Component({
  selector: 'app-root',
   standalone: true,
  imports: [Cv, Test, RouterOutlet, Header, RouterSimulator],
  templateUrl: './app.html',
 // styleUrls: ['./app.component.css']
})
export class App {
  
}
