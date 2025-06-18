import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CvService } from '../cv-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-cv',
  imports: [FormsModule],
  templateUrl: './add-cv.html',
  styleUrl: './add-cv.css'
})
export class AddCv {
  constructor(private cvService:CvService,private router:Router) { }
addPersonne(formulaire: NgForm){
  this.cvService.addPersonne(formulaire.value);
  this.router.navigate(['/cv']);
}
}
