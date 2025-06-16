import { Injectable } from '@angular/core';
import { personne } from '../Model/personne';

@Injectable({
  providedIn: 'root',
  
})
export class CvService {
private  personnes: personne[] = [];
  constructor() { 
    this.personnes = [
      new personne(1, 'marvel', 'john', 30, 'rotating_card_profile3.png', 12345678, 'Software Engineer'),
      new personne(2, 'smith', 'jane', 28, 'rotating_card_profile.png', 87654321, 'Data Scientist'),
      new personne(3, 'brown', 'charlie', 35, 'rotating_card_profile2.png', 11223344, 'Product Manager'), 
      new personne(4, 'doe', 'alice', 26, '', 44332211, 'UX Designer'),   
       
    ];
  }
  getPersonnes(): personne[] {
    return this.personnes;
  }
  getPersonneById(id: number): personne | undefined {
    return this.personnes.find(personne => personne.id == id);
  }
}
