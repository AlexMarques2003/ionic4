import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http : HttpClient) { }
  login(){
    let url = 'http://localhost:8080/auth/';
    let headers = new HttpHeaders({'Content-Type': 'application/json',
                                    'Accept' : 'application/json'});
    let body = {
      "email": "admin@kazale.com",
      "senha": "123456"
    }

    return this.http.post(url, body, { headers : headers }).toPromise();

  }

}
