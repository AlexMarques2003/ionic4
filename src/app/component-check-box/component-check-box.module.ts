import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentCheckBoxPage } from './component-check-box.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentCheckBoxPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentCheckBoxPage]
})
export class ComponentCheckBoxPageModule {}
