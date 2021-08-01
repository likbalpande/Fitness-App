import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Add1PageRoutingModule } from './add1-routing.module';

import { Add1Page } from './add1.page';

import{Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'add1',
    component: Add1Page,
    children: [
          {
            path: 'tab1',
            loadChildren: '../alerts/alerts.module#AlertsPageModule'
          },
          {
            path: 'tab2',
            loadChildren: '../../tabs/food/food.module#FoodPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: '/add1/tab1',
        pathMatch: 'full'
      }
];


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
