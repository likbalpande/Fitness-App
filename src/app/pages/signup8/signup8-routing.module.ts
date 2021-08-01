import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signup8Page } from './signup8.page';

const routes: Routes = [
  {
    path: '',
    component: Signup8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signup8PageRoutingModule {}
