export class personne {
    id: number;
    name: string;
    firstName: string;
    age: number;
    path: string;
    cin: number;
    job: string;
constructor(id: any=0, name: any='', firstName: any='', age: any=0, path: any='', cin: any=0, job: any='') {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
  
}