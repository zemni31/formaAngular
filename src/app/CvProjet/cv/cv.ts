import { Component, Input, OnInit } from '@angular/core';
import { ListeCv } from "../liste-cv/liste-cv";
import { DetailCv } from "../detail-cv/detail-cv";
import { personne } from "../../Model/personne";
@Component({
  selector: 'app-cv',
  standalone: true, 
  imports: [ListeCv, DetailCv],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  
selectedpersonne!: personne;
  personnes: personne[] = [];
  ngOnInit() {
    this.personnes = [
      new personne(1, 'Marvel', 'John', 30, 'rotating_card_profile3.png', 12345678, 'Software Engineer'),
      new personne(2, 'Smith', 'Jane', 28, 'rotating_card_profile.png', 87654321, 'Data Scientist'),
      new personne(3, 'Brown', 'Charlie', 35, 'rotating_card_profile2.png', 11223344, 'Product Manager'),    
       
    ];
  }
selectedPersonne(Personne: personne) {
    this.selectedpersonne = Personne;
  
}
}