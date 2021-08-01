import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/start/start.module').then( m => m.StartPageModule)
      },
      {
        path: 'start',
        loadChildren: () => import('../pages/start/start.module').then( m => m.StartPageModule)
      },
      {
        path: 'selected-date',
        loadChildren: () => import('../pages/selected-date/selected-date.module').then( m => m.SelectedDatePageModule)
      },
      {
        path: 'event',
        loadChildren: () => import('../pages/event/event.module').then( m => m.EventPageModule)
      },
      {
        path: 'event-edit',
        loadChildren: () => import('../pages/event-edit/event-edit.module').then( m => m.EventEditPageModule)
      },
      {
        path: 'add',
        loadChildren: () => import('../pages/add/add.module').then( m => m.AddPageModule)
      },

      {
        path: 'alerts',
        loadChildren: () => import('../pages/alerts/alerts.module').then( m => m.AlertsPageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../pages/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
