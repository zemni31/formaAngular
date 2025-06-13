import { Component } from '@angular/core';
import { Highlight } from '../highlight';
import{ Rainbow } from '../rainbow';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Highlight, Rainbow],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {

}
