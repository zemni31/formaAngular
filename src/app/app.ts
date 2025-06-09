import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildA } from './child-a/child-a';
import { ChildB } from './child-b/child-b';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [RouterOutlet,ChildA,ChildB],
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class App {
  protected title = 'Rihab Zemni';
}
