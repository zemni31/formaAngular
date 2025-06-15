import { Injectable } from '@angular/core';
import { personne } from '../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
private embauches: personne[]=[];
  constructor() {}
  getEmbauches(): personne[] {
    return this.embauches;
}
embaucher(personne : personne):void{
  const index=this.embauches.indexOf(personne);
if (index == -1) {
this.embauches.push(personne);
}
else{
  alert(`${personne.name} est déjà embauchée`);
}
}
débauchder(personne: personne): void {
    const index=this.embauches.indexOf(personne);
if (index >=0) {
this.embauches.splice(index,1);
}
else{
  alert(`${personne.name} n'existe pas dans la liste des embauchés`);
}
}



}