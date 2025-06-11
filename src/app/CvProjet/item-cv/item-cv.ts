import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personne } from '../../Model/personne';

@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [],
  templateUrl: './item-cv.html',
  styleUrl: './item-cv.css'
})
export class ItemCv {
  @Input() personne!:personne ;
  @Output() personneSelected=new EventEmitter();
sendPersonne(){
  this.personneSelected.emit(this.personne);
}
}