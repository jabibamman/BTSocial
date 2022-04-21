import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { AmisComponent } from './amis/amis.component';
import { ProfilComponent } from './profil/profil.component';
import { MessagesComponent } from './messages/messages.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ParametresComponent } from './parametres/parametres.component';


@NgModule({
  declarations: [
    AmisComponent,
    ProfilComponent,
    MessagesComponent,
    RechercheComponent,
    ParametresComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
