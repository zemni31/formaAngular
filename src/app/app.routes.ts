import { Routes } from '@angular/router';
import { Cv } from './CvProjet/cv/cv';
import { Test } from './directive/test/test';
import { Detail } from './CvProjet/detail/detail';
export const routes: Routes = [
    {path: 'cv', redirectTo: '/', pathMatch: 'full'},
    {path:'',component:Cv},
     {path:'cv/:id',component:Detail},
    {path:'test/:bg',component:Test},
];

