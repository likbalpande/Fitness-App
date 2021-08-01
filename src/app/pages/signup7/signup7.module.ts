import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signup7PageRoutingModule } from './signup7-routing.module';

import { Signup7Page } from './signup7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Signup7PageRoutingModule
  ],
  declarations: [Signup7Page]
})
export class Signup7PageModule {}
