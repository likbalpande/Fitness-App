import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Add2PageRoutingModule } from './add2-routing.module';

import { Add2Page } from './add2.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Add2PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Add2Page]
})
export class Add2PageModule {}
