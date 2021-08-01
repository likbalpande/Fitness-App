import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup6PageRoutingModule } from './signup6-routing.module';

import { Signup6Page } from './signup6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup6PageRoutingModule
  ],
  declarations: [Signup6Page]
})
export class Signup6PageModule {}
