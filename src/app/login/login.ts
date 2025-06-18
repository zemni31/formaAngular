import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',

  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
login(formulaire: NgForm){

}
}
