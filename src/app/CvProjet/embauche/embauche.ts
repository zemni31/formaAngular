import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from "../default-image-pipe";
import { NgIf,NgFor } from '@angular/common';import { personne } from '../../Model/personne';
import { EmbaucheService } from '../embauche-service';
@Component({
  selector: 'app-embauche',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe,NgIf,NgFor],
  templateUrl: './embauche.html',
  styleUrl: './embauche.css'
})
export class Embauche {

embauches: personne[] = [];

constructor( private embaucheService: EmbaucheService) {
    
  }
  ngOnInit() {
    this.embauches = this.embaucheService.getEmbauches();
  } 
}