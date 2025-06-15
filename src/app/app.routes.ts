import { Routes } from '@angular/router';
import { Cv } from './CvProjet/cv/cv';
import { Test } from './directive/test/test';
export const routes: Routes = [
    {path: 'cv', redirectTo: '/', pathMatch: 'full'},
    {path:'',component:Cv},
    {path:'test/:bg',component:Test},
];

