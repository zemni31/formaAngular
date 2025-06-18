import { Component } from '@angular/core';
import { personne } from '../../Model/personne';
import { CommonModule } from '@angular/common';
import { CvService } from '../cv-service';
import { ActivatedRoute } from '@angular/router';
import { DefaultImagePipe } from "../default-image-pipe";
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail {
  personne!: personne;
constructor(private cvService:CvService,private activateRoute:ActivatedRoute) {}

ngOnInit() {
this.activateRoute.params.subscribe(params=>{
this.personne=this.cvService.getPersonneById(params['id'])!;
}
)

}}