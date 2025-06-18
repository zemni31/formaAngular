import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css'
})
export class Http implements OnInit {
constructor(private http:HttpClient) {
}
ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
next: (response: any) => {
  console.log('response', response);
},
error: (error: any) => {
  console.log('error', error);
},
complete: () => {
  console.log('complete');
}


  });


}}
