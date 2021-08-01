import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedDatePage } from './selected-date.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedDatePageRoutingModule {}
