import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { NovoPerfilModalPage } from '../novo-perfil-modal/novo-perfil-modal.page';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { PerfilServiceService } from '../services/perfil-service.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
      message: 'BEM VINDO',
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
      message: 'Carregando, aguarde...',
    }).then((loader) => {
      loader.present();
      this.perfilService.add(perfil).subscribe(
        (data) => {
          this.perfis.push(data);
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
      message: 'REMOVENDO ...',
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
    this.loadingController.create({
<<<<<<< HEAD
      message: 'Carregando...',
    }).then((loader) => {
      loader.present();
      perfil.likes = perfil.likes + 1;
      this.perfilService.edit(perfil).subscribe(
=======
      message: 'CARREGANDO',
    }).then((loader) => {
      loader.present();

      perfil.likes = perfil.likes + 1;
      this.perfilService.add(perfil).subscribe(
>>>>>>> 1399d214ab7e2fa1f574e89ec77f91bb0f805228
        (data) => {
          loader.dismiss();
        }
      )
    });
<<<<<<< HEAD

=======
>>>>>>> 1399d214ab7e2fa1f574e89ec77f91bb0f805228
  }


  
}
