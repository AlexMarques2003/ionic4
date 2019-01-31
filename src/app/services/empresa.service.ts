import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBrYXphbGUuY29tIiwicm9sZSI6IlJPTEVfQURNSU4iLCJjcmVhdGVkIjoxNTQ4ODQ4NTY5MDgyLCJleHAiOjE1NDk0NTMzNjl9.pIHeihO6hKxRAJTzo9PhynVY-eiB-EbIBbqSkNdCmSobA6O_XOOL_QHZnJf7ch0xsO2Xn6i22BG-GhkyMYmjzA';

  constructor(private http : HttpClient) { }

  obterDadosDaEmpresa(cnpj: any){

    let url = 'http://localhost:8080/api/empresas/cnpj/' + cnpj;
    let headers = new HttpHeaders({'Content-Type': 'application/json',
                                    'Accept' : 'application/json',
                                    'Authorization': 'Bearer ' + this.token });

    return this.http.get(url, { headers : headers }).toPromise();
  }

  adicionar(empresa: any){

    let url = 'http://localhost:8080/api/cadastrar-pj';
    let headers = new HttpHeaders({'Content-Type': 'application/json',
                                    'Accept' : 'application/json',
                                    'Authorization': 'Bearer ' + this.token });

    let body = empresa;

    console.log(body);


    return this.http.post(url, body, { headers : headers }).toPromise();
  }
/*
  excluir(id: any){

    let url = 'http://localhost:8080/api/empresas/excluir' + id;
    let headers = new HttpHeaders({'Content-Type': 'application/json',
                                    'Accept' : 'application/json',
                                    'Authorization': 'Bearer ' + this.token });

    let body = empresa;

    return this.http.post(url, body, { headers : headers }).toPromise();
  }
*/
}
