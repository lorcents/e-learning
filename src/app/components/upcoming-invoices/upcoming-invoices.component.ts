import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/service.service';
import { Invoice, School } from '../../models/model';
import { MatDialog } from '@angular/material/dialog';
import { PaymentModalComponent } from '../payment-modal/payment-modal.component';

@Component({
  selector: 'app-upcoming-invoices',
  templateUrl: './upcoming-invoices.component.html',
  styleUrls: ['./upcoming-invoices.component.css']
})
export class UpcomingInvoicesComponent implements OnInit {
  upcomingInvoices: Invoice[] = [];
  schools:School[]=[]

  constructor(private serviceService: ServicesService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchUpcomingInvoices();
    this.fetchSchool()
  }

  fetchUpcomingInvoices() {
    this.serviceService.getUpcomingInvoices().subscribe((invoices: Invoice[]) => {
      this.upcomingInvoices = invoices.slice(0, 5);
    });
  }

  fetchSchool(){
    this.serviceService.getSchools().subscribe((school: School[]) => {
      this.schools = school;
    });
  }

  getSchoolName(id:string){
    const foundSchool = this.schools.find(school => school.id == id);
    return foundSchool ? foundSchool.name : 'undefined';
  }


  openPaymentModal(invoiceId: string, amount: number): void {
    const dialogRef = this.dialog.open(PaymentModalComponent, {
      width: '500px', // Adjust width and other properties as needed
      data: { invoiceId: invoiceId, amount: amount } // Pass data to the modal
    });

    // You can subscribe to the dialog result if necessary
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}