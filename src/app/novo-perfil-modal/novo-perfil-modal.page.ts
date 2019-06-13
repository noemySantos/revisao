import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo-perfil-modal',
  templateUrl: './novo-perfil-modal.page.html',
  styleUrls: ['./novo-perfil-modal.page.scss'],
})
export class NovoPerfilModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
novo_perfil = {
  "avatar":"",
  "nome":"",
  "idade":"",
  "likes":0
}
add() {

}

}
