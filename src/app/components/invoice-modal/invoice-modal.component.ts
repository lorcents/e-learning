import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/service.service';
import { School } from '../../models/model';

@Component({
  selector: 'app-invoice-modal',
  templateUrl: './invoice-modal.component.html',
  styleUrls: ['./invoice-modal.component.css'],
})
export class InvoiceModalComponent implements OnInit {
  invoiceForm: FormGroup;
  invoiceItems = ['Zeraki Analytics', 'Zeraki Finance', 'Zeraki Timetable'];
  schools: School[] = [];

  constructor(
    public dialogRef: MatDialogRef<InvoiceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private servicesservice: ServicesService
  ) {
    this.invoiceForm = this.fb.group({
      invoiceItem: ['', Validators.required],
      dueDate: ['', Validators.required],
      amountDue: ['', Validators.required],
      schoolId:['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.servicesservice.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  onSubmit() {
    if (this.invoiceForm.valid) {
      const dueDate = new Date(this.invoiceForm.value.dueDate);
      const daysUntilDue = Math.ceil((dueDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      
      const invoiceNumber = this.generateRandomString(5); // Generate random 5-character string
      const inv = {
        invoiceNumber: invoiceNumber,
        invoiceItem: this.invoiceForm.value.invoiceItem as string,
        creationDate: this.formatDate(new Date()), // Format current date
        dueDate: this.invoiceForm.value.dueDate as string,
        amountDue: this.invoiceForm.value.amountDue as number,
        paidAmount: 0,
        balance: this.invoiceForm.value.amountDue,
        completionStatus: 'pending',
        daysUntilDue: daysUntilDue,
        schoolId: this.invoiceForm.value.schoolId as string,
      };


      this.servicesservice.createInvoice(inv).subscribe(
        (response) => {
          // Handle success response
          console.log('Invoice created:', response);
          // Optionally, perform any additional actions (e.g., close the modal)
          this.dialogRef.close(response);
        },
        (error) => {
          // Handle error
          console.error('Error creating invoice:', error);
          
        }
      );
    }
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Add leading zero if needed
    const day = ('0' + date.getDate()).slice(-2); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  }

  // Helper function to generate random string of given length
  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  onClose() {
    this.dialogRef.close();
  }
}
