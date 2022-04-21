import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ParametresComponent } from '../protected/parametres/parametres.component';
import { AmisComponent } from '../protected/amis/amis.component';
import { ProfilComponent } from '../protected/profil/profil.component';
import { MessagesComponent } from '../protected/messages/messages.component';
import { RechercheComponent } from '../protected/recherche/recherche.component';


@NgModule({
  declarations: [
    HomeComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
