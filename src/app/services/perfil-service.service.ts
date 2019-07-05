import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilServiceService {

  URL_BASE = 'https://5d14083f76f3f5001415f492.mockapi.io/perfil/'
  

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get(this.URL_BASE);
  }

  add(perfil) {
    return this.http.post(this.URL_BASE, perfil);
  }

  remove(perfil){
  return this.http.delete(this.URL_BASE + perfil.id)
  }
}
