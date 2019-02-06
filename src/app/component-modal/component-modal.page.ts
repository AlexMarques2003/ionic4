import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ComponentModalInternoPage } from './../component-modal-interno/component-modal-interno.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showModal() {
    let modal = await this.modalCtrl.create({
      component: ComponentModalInternoPage,
      componentProps: { nome: 'alex', idade: 37 }

    })
    // Ao fechar o modal pega o parametro que veio do modal interno
    //modal.onDidDismiss((responseMo  dal) =>{
    modal.onDidDismiss().then( async ( responseModal: OverlayEventDetail) =>{
      if(responseModal !== null){
        console.log(responseModal);

        let alerta = await this.alertCtrl.create({
          header: 'Resultado do modal',
          message: 'Seja bem vinda ' + responseModal.data.nome

        });

        return await alerta.present();
      }
    })

    return await modal.present();

  }
}
