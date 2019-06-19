import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { NovoPerfilModalPage } from '../novo-perfil-modal/novo-perfil-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];

  constructor(public modalController: ModalController, private storage: Storage) {
    this.perfis = [
      {
        "avatar": "https://data.whicdn.com/images/310986657/large.jpg",
        "nome": "Neymar",
        "idade": "27 anos",
        "likes": 0,
      },

      {
        "avatar": "https://tmssl.akamaized.net/images/portrait/originals/29241-1462893880.jpg",
        "nome": "tiago silva",
        "idade": "34 anos",
        "likes": 0,
      }
    ]
  }
  remove(perfil) {
    var i = this.perfis.indexOf(perfil);
    this.perfis.splice(i, 1);
    this.storage.set('perfil', this.perfis)
  }


  likes(perfil) {
    perfil.likes = perfil.likes + 1;
  }

  async abrir_modal() {
    let modal = await this.modalController.create({
      component: NovoPerfilModalPage
    });

    modal.onDidDismiss().then((retorno) => {
      this.perfis.push(retorno.data);
    });

    modal.present();

  }
}
