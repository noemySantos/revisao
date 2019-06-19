import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';

import { IonicModule } from '@ionic/angular';

import { NovoPerfilModalPage } from './novo-perfil-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovoPerfilModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [NovoPerfilModalPage]
})
export class NovoPerfilModalPageModule {}
