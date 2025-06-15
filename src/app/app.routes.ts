import { Routes } from '@angular/router';
import { Cv } from './CvProjet/cv/cv';
import { Test } from './directive/test/test';
export const routes: Routes = [
    {path:'cv',component:Cv},
    {path:'test',component:Test},
];

