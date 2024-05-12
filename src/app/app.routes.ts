import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotificationsComponentComponent } from './notifications-component/notifications-component.component';
import { SchoolsComponentComponent } from './schools-component/schools-component.component';
import { InvoicesComponentComponent } from './invoices-component/invoices-component.component';
import { CollectionsComponentComponent } from './collections-component/collections-component.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' }, // Default route
  {
    path: 'home',
    component: HomeComponentComponent,
    children: [
      { path: 'dashboard', component: DashboardComponentComponent },
      { path: 'notifications', component: NotificationsComponentComponent }
    ]
  },
  {
    path: 'school',
    component: SchoolComponentComponent,
    children: [
      { path: 'schools', component: SchoolsComponentComponent },
      { path: 'invoices', component: InvoicesComponentComponent },
      { path: 'collections', component: CollectionsComponentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

