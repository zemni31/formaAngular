import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [],
  templateUrl: './observable.html',
  styleUrls: ['./observable.css']
})
export class ObservableComponent {
  monObservable!:Observable<string>;
  images = ['404.jpg', 'cv.jpg', 'tim_logo.png','rotating_card_thumb2.png','rotating_card_thumb3.png'];
currentImage: string = '';
  ngOnInit() {
    this.monObservable=new Observable(
      (observer)=>{
        let i=this.images.length -1;
        setInterval(() => {
          if(i>=0){
             this.currentImage = this.images[i];
            observer.next(this.images[i]);
           
            i--;
          }else{
            i=this.images.length -1;
          }

        },1000);
          
      }
    )
    this.monObservable.subscribe(
      (image) => {
        this.currentImage = image;
      }
   
);







}}