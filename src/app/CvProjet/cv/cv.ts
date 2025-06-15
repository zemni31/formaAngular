import { Component, Input, OnInit } from '@angular/core';
import { ListeCv } from "../liste-cv/liste-cv";
import { DetailCv } from "../detail-cv/detail-cv";
import { personne } from "../../Model/personne";
import { NgIf } from '@angular/common';
import { CvService } from '../cv-service';
import { Embauche } from "../embauche/embauche";
@Component({
  selector: 'app-cv',
  standalone: true, 
  imports: [ListeCv, DetailCv, NgIf, Embauche],
  templateUrl: './cv.html',
  styleUrl: './cv.css'
})
export class Cv implements OnInit {
  constructor(private CvService:CvService) { }
selectedpersonne!: personne;
  personnes: personne[] = [];
  ngOnInit() {
    this.personnes = this.CvService.getPersonnes();


  }
selectedPersonne(Personne: personne) {
    this.selectedpersonne = Personne;
  
}}