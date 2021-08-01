import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Add1PageRoutingModule } from './add1-routing.module';

import { Add1Page } from './add1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Add1PageRoutingModule
  ],
  declarations: [Add1Page]
})
export class Add1PageModule {}
