import { Component } from '@angular/core';
import { Highlight } from '../highlight';
import{ Rainbow } from '../rainbow';
import { NgIf } from '@angular/common';
import { NgFor} from '@angular/common';
import { Premier } from '../../premier';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Highlight, Rainbow,NgIf,NgFor],
  templateUrl: './test.html',
  styleUrl: './test.css',
  providers: [Premier]
})
export class Test {
show: boolean = true;
persons=['Rihab','Houssem','Sabrine','Yosra'];
constructor(private premierService:Premier,private router:Router) {}
loggerMesData(){
  this.premierService.logger('data from Test component');
}
goToCv(){
this.router.navigate(['/cv']);
}
}
