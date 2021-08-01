import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Add1Page } from './add1.page';

const routes: Routes = [
  {
    path: '',
    component: Add1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Add1PageRoutingModule {}
