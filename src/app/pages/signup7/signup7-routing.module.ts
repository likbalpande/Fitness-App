import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup7Page } from './signup7.page';

const routes: Routes = [
  {
    path: '',
    component: Signup7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup7PageRoutingModule {}
