import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../pages/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'signup1',
        loadChildren: () => import('../pages/signup1/signup1.module').then( m => m.Signup1PageModule)
      },
      {
        path: 'signup2',
        loadChildren: () => import('../pages/signup2/signup2.module').then( m => m.Signup2PageModule)
      },
      {
        path: 'signup3',
        loadChildren: () => import('../pages/signup3/signup3.module').then( m => m.Signup3PageModule)
      },
      {
        path: 'signup4',
        loadChildren: () => import('../pages/signup4/signup4.module').then( m => m.Signup4PageModule)
      },
      {
        path: 'signup5',
        loadChildren: () => import('../pages/signup5/signup5.module').then( m => m.Signup5PageModule)
      },
      {
        path: 'signup6',
        loadChildren: () => import('../pages/signup6/signup6.module').then( m => m.Signup6PageModule)
      },
      {
        path: 'signup7',
        loadChildren: () => import('../pages/signup7/signup7.module').then( m => m.Signup7PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
