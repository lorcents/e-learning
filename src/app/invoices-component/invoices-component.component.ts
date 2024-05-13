import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { School, Invoice } from '../models/model'; // Assuming School and Invoice are imported from '../models/model'

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

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.loadSchools();
    this.loadInvoices();
  }

  onSchoolChange(schoolId: number) {
    // Implement logic to filter invoices based on selected school
    this.filteredInvoices = this.selectedSchool ? this.invoices.filter(i => i.schoolId === schoolId) : this.invoices;
  }

  loadSchools(): void {
    this.servicesService.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  loadInvoices(): void {
    this.servicesService.getUpcomingInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
      this.filteredInvoices = this.invoices; // Initialize filteredInvoices as well
    });
  }

  filterByStatus(status: string) {
    // Implement logic to filter invoices by status (Completed/Pending)
    this.filteredInvoices = this.invoices.filter(i => i.completionStatus === status);
  }

  clearFilters() {
    // Clear all filters and show all invoices
    this.selectedSchool = null;
    this.filteredInvoices = this.invoices;
  }

  editInvoice(invoiceId: number) {
    // Implement edit logic
  }

  deleteInvoice(invoiceId: number) {
    // Implement delete logic
  }

  addInvoices(){}
  exportInvoices(){}
  

}
