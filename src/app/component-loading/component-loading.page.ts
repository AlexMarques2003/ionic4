import { LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async showLoadingDefault() {
    let loading = await this.loadingCtrl.create({
      message: 'Processando...',
      duration: 2000
    });

    return await loading.present();
  }

  async showLoadingCustomize(spinnerName: string) {
    let loading = await this.loadingCtrl.create({
      message: 'Processando...',
      duration: 2000,
      spinner: spinnerName,
      translucent: true
    });
    return await loading.present();
  }

  async showLoadingConsumindoApi() {
    let loading = await this.loadingCtrl.create({
      message: 'Requisição para o servidor...'
    });

    // Simulando o tempo de resposta da API
    setTimeout(() => {
      console.log('Servidor respondeu...')
      loading.dismiss();
    }, 5000);

    console.log('Fiz uma requisição para o servidor')
    return await loading.present();
  }
}
