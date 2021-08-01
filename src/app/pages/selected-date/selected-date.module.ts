import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedDatePageRoutingModule } from './selected-date-routing.module';

import { SelectedDatePage } from './selected-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedDatePageRoutingModule
  ],
  declarations: [SelectedDatePage]
})
export class SelectedDatePageModule {}
