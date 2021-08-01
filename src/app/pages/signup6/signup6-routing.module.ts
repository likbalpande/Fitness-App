import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup6Page } from './signup6.page';

const routes: Routes = [
  {
    path: '',
    component: Signup6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup6PageRoutingModule {}
