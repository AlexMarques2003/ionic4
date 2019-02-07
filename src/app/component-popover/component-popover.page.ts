
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '../../../node_modules/@ionic/angular';
import { ComponentPopoverInternoPage } from '../component-popover-interno/component-popover-interno.page';


@Component({
  selector: 'app-component-popover',
  templateUrl: './component-popover.page.html',
  styleUrls: ['./component-popover.page.scss'],
})
export class ComponentPopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async showPopover(event: any){
    let popover = await this.popoverCtrl.create({
      component : ComponentPopoverInternoPage,
      event: event,
    });

    return await popover.present();
  }

  async showPopoverTranslucent(event: any){
    let popover = await this.popoverCtrl.create({
      component : ComponentPopoverInternoPage,
      event: event,
      translucent: true
    });

    return await popover.present();
  }
}
