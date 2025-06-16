import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-cv',
  imports: [FormsModule],
  templateUrl: './add-cv.html',
  styleUrl: './add-cv.css'
})
export class AddCv {
addPersonne(formulaire: NgForm){
  console.log(formulaire);
}
}
