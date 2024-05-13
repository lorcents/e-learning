import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FormsModule } from '@angular/forms';
import {BaseChartDirective, provideCharts, withDefaultRegisterables} from 'ng2-charts';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component'; // Assuming you have a SideNavigationComponent
import { HomeComponentComponent } from './home-component/home-component.component';
import { SchoolComponentComponent } from './school-component/school-component.component';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';
import { NotificationsComponentComponent } from './notifications-component/notifications-component.component';
import { SchoolsComponentComponent } from './schools-component/schools-component.component';
import { InvoicesComponentComponent } from './invoices-component/invoices-component.component';
import { CollectionsComponentComponent } from './collections-component/collections-component.component';
import { CardComponent } from './card/card.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { UpcomingInvoicesComponent } from './components/upcoming-invoices/upcoming-invoices.component';
import { DatePipe } from '@angular/common';
import { ServicesService } from './services/service.service';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';



import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    HomeComponentComponent,
    DashboardComponentComponent,
    NotificationsComponentComponent,
    SchoolComponentComponent,
    SchoolsComponentComponent,
    InvoicesComponentComponent,
    CollectionsComponentComponent,
    CardComponent,
    BarGraphComponent,
    PieChartComponent,
    UpcomingInvoicesComponent,
    PaymentModalComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    BaseChartDirective,
    RouterModule.forRoot(routes),
  ],
  providers: [provideAnimationsAsync(), provideCharts(withDefaultRegisterables()),DatePipe,ServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
