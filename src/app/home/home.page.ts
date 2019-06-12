import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfis = [];

  constructor() {
    this.perfis = [
      {
        "avatar": "https://cdn-ofuxico.akamaized.net/img/upload/noticias/2019/06/05/neymar-instagram_350808_36.jpg",
        "nome": "Neymar",
        "idade": "25 anos",
        "like": "500",
      },

      {
        "avatar": "https://tmssl.akamaized.net/images/portrait/originals/29241-1462893880.jpg",
        "nome": "tiago silva",
        "idade": "22 anos",
        "like": "100",
      }
    ]
  }
}
