import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../public/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'amis',
    redirectTo: 'protected/amis',
    pathMatch: 'prefix'
  },
  {
    path: 'profil',
    redirectTo: 'protected/profil',
    pathMatch: 'prefix'
  },
  {
    path: 'messages',
    redirectTo: 'protected/messages',
    pathMatch: 'prefix'
  },
  {
    path: 'parametres',
    redirectTo: 'protected/parametres',
    pathMatch: 'prefix'
  },
  {
    path: 'recherche',
    redirectTo: 'protected/recherche',
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
