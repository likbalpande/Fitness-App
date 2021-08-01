import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IonicModule} from'@ionic/angular';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: '/tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'tab2',
        loadChildren: '/tab2/tab2.module#Tab2PageModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
