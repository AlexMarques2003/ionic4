import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout-tabs',
  templateUrl: './layout-tabs.page.html',
  styleUrls: ['./layout-tabs.page.scss'],
})
export class LayoutTabsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openHome(){
    this.navCtrl.navigateForward('home');
  }
}
