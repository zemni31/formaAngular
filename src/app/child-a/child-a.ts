import { Component } from '@angular/core';
import { GrandChild } from '../grand-child/grand-child';

@Component({
  selector: 'app-child-a',
    standalone: true,
  imports: [GrandChild],
  templateUrl: './child-a.html',
  styleUrl: './child-a.css'
})
export class ChildA {

}
