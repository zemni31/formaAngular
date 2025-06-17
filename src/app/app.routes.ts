import { Routes } from '@angular/router';
import { Cv } from './CvProjet/cv/cv';
import { Test } from './directive/test/test';
import { Detail } from './CvProjet/detail/detail';
import { DeleteCv } from './CvProjet/delete-cv/delete-cv';
import { AddCv } from './CvProjet/add-cv/add-cv';
import { ErrorC } from './error/error';
import { Login } from './login/login';
export const routes: Routes = [
 {path:'cv',children:[
    {path:'',component:Cv},
    {path:'delete/:id',component:DeleteCv},
    {path:'add',component:AddCv},
    {path:':id',component:Detail},
   
 ]},
 {path:'',component:Cv},
  {path:'test/:bg',component:Test},
  {path:'login',component:Login},
 { path:'**',component:ErrorC},
   
];

