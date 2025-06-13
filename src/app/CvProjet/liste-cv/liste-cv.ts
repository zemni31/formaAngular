import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCv } from "../item-cv/item-cv";
import { personne } from "../../Model/personne";
import { NgFor} from '@angular/common';
@Component({
  selector: 'app-liste-cv',
  standalone: true,
  imports: [ItemCv,NgFor],
  templateUrl: './liste-cv.html',
  styleUrl: './liste-cv.css'
})
export class ListeCv {
  @Input() personnes!: personne[];
@Output() personneSelected = new EventEmitter();
  selectPersonne(personneSelected :personne) {
    this.personneSelected.emit(personneSelected);
    
  }
}
