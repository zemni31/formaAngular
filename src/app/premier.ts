import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 
})
export class Premier {
data=['data1', 'data2', 'data3','data4'];
  constructor() { }
  logger(data:any){
    console.log( this.data);
    console.log( data);

  }
  addData(newData: any) {
    this.data.push(newData);
  
  }
}
