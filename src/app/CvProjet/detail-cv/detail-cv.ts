import { Component, Input } from '@angular/core';
import { personne } from "../../Model/personne";
@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
@Input() personne!:personne;
}
