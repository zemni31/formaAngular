import { Routes } from '@angular/router';
import { Cv } from './CvProjet/cv/cv';
import { Test } from './directive/test/test';
import { Detail } from './CvProjet/detail/detail';
import { DeleteCv } from './CvProjet/delete-cv/delete-cv';
import { AddCv } from './CvProjet/add-cv/add-cv';
export const routes: Routes = [
 {path:'cv',component:Cv,children:[
    
    {path:'delete/:id',component:DeleteCv},
    {path:'add',component:AddCv},
    {path:':id',component:Detail},
 ]},
 
    {path:'test/:bg',component:Test},
];

