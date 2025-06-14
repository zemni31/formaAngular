import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personne } from '../../Model/personne';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../default-image-pipe';
@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe],
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