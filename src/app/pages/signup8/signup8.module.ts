import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup8PageRoutingModule } from './signup8-routing.module';

import { Signup8Page } from './signup8.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup8PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Signup8Page]
})
export class Signup8PageModule {}
