import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 
})
export class Premier {

  constructor() { }
  logger(data:any){
    console.log( data);
  }
}
