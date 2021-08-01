import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup8',
    loadChildren: () => import('./pages/signup8/signup8.module').then( m => m.Signup8PageModule)
  },
  {
    path: 'add1',
    loadChildren: () => import('./pages/add1/add1.module').then( m => m.Add1PageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./tabs/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'move',
    loadChildren: () => import('./tabs/move/move.module').then( m => m.MovePageModule)
  },
  {
    path: 'exercise',
    loadChildren: () => import('./tabs/exercise/exercise.module').then( m => m.ExercisePageModule)
  },
  {
    path: 'stand',
    loadChildren: () => import('./tabs/stand/stand.module').then( m => m.StandPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tabs/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tabs/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'add2',
    loadChildren: () => import('./pages/add2/add2.module').then( m => m.Add2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
