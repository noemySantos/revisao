import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { NovoPerfilModalPage } from '../novo-perfil-modal/novo-perfil-modal.page';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { PerfilServiceService } from '../services/perfil-service.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis: any;

  constructor(public modalController: ModalController, private storage: Storage, private http: HttpClient, public loadingController: LoadingController, private perfilService: PerfilServiceService) {
    this.perfis = [];
    this.loadingController.create({
      message: 'Bem vindo',
    }).then((loader) => {
      loader.present();
      this.perfilService.list().subscribe(
        (data) => {
          this.perfis = data;
          loader.dismiss();
        }
      )
    });
  }

  add(perfil) {
    this.loadingController.create({
      message: 'já já voltamos',
    }).then((loader) => {
      loader.present();
      this.perfilService.add(perfil).subscribe(
        (data) => {
          this.perfis.log.push(data);
          loader.dismiss();
        }
      )
    });
  }
  async abrir_modal() {
    const modal = await this.modalController.create({
      component: NovoPerfilModalPage
    });
    await modal.present();

    modal.onDidDismiss().then((perfil) => {
      this.add(perfil.data)
    })
  }

  remove(perfil) {
    this.loadingController.create({
      message: 'Removendo...',
    }).then((loader) => {
      loader.present();
      this.perfilService.remove(perfil).subscribe(
        (data) => {
          var i = this.perfis.indexOf(perfil);
          this.perfis.splice(i, 1);
          loader.dismiss();
        }
      )
    });
  }


  likes(perfil) {
    perfil.likes = perfil.likes + 1;
  }
}
