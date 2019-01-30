import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

//  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBrYXphbGUuY29tIiwicm9sZSI6IlJPTEVfQURNSU4iLCJjcmVhdGVkIjoxNTQ4NzgwMjM1MDIxLCJleHAiOjE1NDkzODUwMzV9.dPjSM-dZIRoYqoDylaiQrlX88M5dVuqHWTW1L6IOK_untNLgFAvscGp5FuQWCBRs3RjV1LABR8AE0gqNXsOymg';

  constructor(private http : HttpClient) { }
 
/*
  adicionar(funcionario: any){
    let url = 'http://localhost:8080/api/funcionarios/' + cnpj;
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(url, funcionario, {headers : headers}).toPromise();
  }

  atualizar(usario: any, token : any){
    let url = 'http://localhost:8080/api/funcionarios/';
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(url, funcionario, {headers : headers}).toPromise();
  }

  excluir(usuario: any){
    let url = 'http://localhost:8080/api/funcionarios/' + id;
    return this.http.delete(url).toPromise();

  }
  */
}
