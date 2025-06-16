import { Component, Input } from '@angular/core';
import { personne } from "../../Model/personne";
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../default-image-pipe';
import { EmbaucheService } from '../embauche-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule,DefaultImagePipe ],
  templateUrl: './detail-cv.html',
  styleUrl: './detail-cv.css'
})
export class DetailCv {
@Input() personne!:personne;

constructor(private embaucheService: EmbaucheService,private route:Router) {}
embaucher() {
    this.embaucheService.embaucher(this.personne);
  }
MoreInfos(){
  const link=['cv',this.personne.id];
this.route.navigate(link);
}


}