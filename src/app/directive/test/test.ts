import { Component } from '@angular/core';
import { Highlight } from '../highlight';
import{ Rainbow } from '../rainbow';
import { NgIf } from '@angular/common';
import { NgFor} from '@angular/common';
import { Premier } from '../../premier';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Highlight, Rainbow,NgIf,NgFor, CommonModule,FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
  providers: [Premier]
})
export class Test {
bg:string='';
show: boolean = true;
persons=['Rihab','Houssem','Sabrine','Yosra'];
constructor(private premierService:Premier,private router:Router,private activateRoute:ActivatedRoute) {}
loggerMesData(){
  this.premierService.logger('data from Test component');
}
goToCv(){
this.router.navigate(['/cv']);
}
ngOnInit() {
  this.activateRoute.params.subscribe(params => {
    this.bg = params['bg'] ;
    
  });
}
changeColor(color:string) {
  this.bg= color;
}
}