import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    {
      path: 'events',
      children: [{
        path: '',
        loadChildren: '../events/events.module#EventsPageModule'
      },
      {
        path: 'edit/:eventId',
        loadChildren: '../events/edit-event/edit-event.module#EditEventPageModule'
      },
      {
        path: ':eventId',
        loadChildren: '../events/event-details/event-details.module#EventDetailsPageModule'
      }]
    },
    {
      path: 'add-event',
      children: [{
        path: '',
        loadChildren: '../events/new-event/new-event.module#NewEventPageModule'
      }]
    },
    {
      path: 'settings',
      children: [{
        path: '',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }]
    },
    {
      path: 'profile',
      children: [{
        path: '',
        loadChildren: '../profile/profile.module#ProfilePageModule'
      }]
    },
    {
      path: '',
      redirectTo: '/tabs/events',
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
