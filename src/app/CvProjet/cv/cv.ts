import { Component, Input, OnInit } from '@angular/core';
import { ListeCv } from "../liste-cv/liste-cv";
import { DetailCv } from "../detail-cv/detail-cv";
import { personne } from "../../Model/personne";
import { NgIf } from '@angular/common';
import { Premier } from '../../premier';
@Component({
  selector: 'app-cv',
  standalone: true, 
  imports: [ListeCv, DetailCv,NgIf],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  constructor(private loggerService:Premier) { }
selectedpersonne!: personne;
  personnes: personne[] = [];
  ngOnInit() {
    this.personnes = [
      new personne(1, 'marvel', 'john', 30, 'rotating_card_profile3.png', 12345678, 'Software Engineer'),
      new personne(2, 'smith', 'jane', 28, 'rotating_card_profile.png', 87654321, 'Data Scientist'),
      new personne(3, 'brown', 'charlie', 35, 'rotating_card_profile2.png', 11223344, 'Product Manager'), 
      new personne(4, 'doe', 'alice', 26, '', 44332211, 'UX Designer'),   
       
    ];
    this.loggerService.logger(this.personnes);
  }
selectedPersonne(Personne: personne) {
    this.selectedpersonne = Personne;
  
}}