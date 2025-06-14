import { Component, Input } from '@angular/core';
import { personne } from "../../Model/personne";
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../default-image-pipe';
@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe ],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
@Input() personne!:personne;
}
