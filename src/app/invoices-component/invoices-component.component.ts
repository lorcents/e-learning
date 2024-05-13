import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { School, Invoice } from '../models/model'; // Assuming School and Invoice are imported from '../models/model'
import { InvoiceModalComponent } from '../components/invoice-modal/invoice-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invoices-component',
  templateUrl: './invoices-component.component.html',
  styleUrls: ['./invoices-component.component.css'] // Use styleUrls instead of styleUrl
})
export class InvoicesComponentComponent implements OnInit {
  selectedSchool: any = null;
  schools: School[] = []; 
  invoices: Invoice[] = []; 
  filteredInvoices: Invoice[] = [];

  constructor(private servicesService: ServicesService,public dialog: MatDialog,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadSchools();
    this.loadInvoices();
  }

  onSchoolChange(school: School) {
    this.filteredInvoices = this.selectedSchool ? this.filteredInvoices.filter(i => i.schoolId === school.id) : this.invoices;
  }

  loadSchools(): void {
    this.servicesService.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  loadInvoices(): void {
    this.servicesService.getUpcomingInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
      this.filteredInvoices = this.invoices; 
    });
  }

  filterByStatus(status: string) {
    // Implement logic to filter invoices by status (Completed/Pending)
    this.filteredInvoices = this.filteredInvoices.filter(i => i.completionStatus === status);
  }

  clearFilters() {
    // Clear all filters and show all invoices
    this.selectedSchool = null;
    this.filteredInvoices = this.invoices;
  }

  editInvoice(invoiceId: string) {
    // Implement edit logic
  }

  deleteInvoice(invoiceId: string) {
    this.servicesService.deleteInvoice(invoiceId).subscribe((response)=>{
      if(response){
        this.toastr.success('Invoice', 'Deleted sucessfully')
        this.loadInvoices()
      }else{
        this.toastr.error('Invoice', 'Something went wrong')
      }
    })
  }
  addInvoices() {
    const dialogRef = this.dialog.open(InvoiceModalComponent, {
      width: '500px',
      data: {
        initialValues: {
          invoiceItem: 'Zeraki Analytics',
          dueDate: '2024-06-20',
          amountDue: '',
        },
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Form data:', result); // Handle form submission here
      }
    });
  }
  exportInvoices(){
    this.toastr.success('Hey', 'Upcoming feature');

  }
  

}
