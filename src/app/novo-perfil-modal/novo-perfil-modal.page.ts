import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-novo-perfil-modal',
  templateUrl: './novo-perfil-modal.page.html',
  styleUrls: ['./novo-perfil-modal.page.scss'],
})
export class NovoPerfilModalPage implements OnInit {

  constructor(public modalController: ModalController, private camera: Camera) { }

  ngOnInit() {
  }
  novo_perfil = {
    "avatar": "",
    "nome": "",
    "idade": "",
    "likes": 0
  }

  add() {
    this.modalController.dismiss(this.novo_perfil);
  }

  take_picture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.novo_perfil.avatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      alert(err);
    });

  }
}
