import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Add2Page } from './add2.page';

const routes: Routes = [
  {
    path: '',
    component: Add2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Add2PageRoutingModule {}
