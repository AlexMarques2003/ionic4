import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentPopoverInternoPage } from './component-popover-interno.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentPopoverInternoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentPopoverInternoPage]
})
export class ComponentPopoverInternoPageModule {}
