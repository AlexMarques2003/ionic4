import { CepService } from './../services/cep.service';
import { UsuarioService } from './../services/usuario.service';
import { FuncionarioService } from './../services/funcionario.service';
import { EmpresaService } from './../services/empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result: any;
  token: any;
  constructor(private usuarioService: UsuarioService, private funcionarioService: FuncionarioService, private empresaService: EmpresaService, private cepService: CepService) { }

  ngOnInit() {
  }

  get() {
    alert('get');
  }
  post() {
    alert('post');
  }
  put() {
    alert('put');
  }
  delete() {
    alert('delete');
  }

  login() {
    this.usuarioService.login()
      .then((response) => {
        this.result = JSON.stringify(response);
        this.token = response.data.token;
        console.log(this.token);
      }).catch((response) => {
        this.result = JSON.stringify(response);
        console.log('Não funcionou');
      });
  }

  obterDadosDaEmpresa(){
    // chama a tela de aguarde
    this.empresaService.obterDadosDaEmpresa('82198127000121')
      .then((response) => {
        this.result = JSON.stringify(response);
        // fecha a tela de aguarde
      }).catch((response) => {
        this.result = JSON.stringify(response);
      });
  }

  adicionar(){
    let empresa = {"nome": "Antonio Alex Marques","email": "alexmarques2004@gmail.com","senha": "123456","cpf": "23159151395","razaoSocial": "Empresa Faxada","cnpj": "35125258000107"}
    this.empresaService.adicionar(empresa)
    .then((response) => {
      this.result =JSON.stringify(response);
    }).catch((response)=>{
      this.result = JSON.stringify(response);
    });
  }

  consultarCep(){
    this.cepService.consultarCep(60455001)
    .then((response) => {
      this.result =JSON.stringify(response);
    }).catch((response)=>{
      this.result = JSON.stringify(response);
    });
  }

  
}
