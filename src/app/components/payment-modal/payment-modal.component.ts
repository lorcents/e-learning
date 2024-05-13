import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})
export class PaymentModalComponent implements OnInit {
  paymentForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<PaymentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { invoiceId: number, amount: number },
    private fb: FormBuilder
  ) {
    this.paymentForm = this.fb.group({
      amount: [data.amount, Validators.required], // Set default value from data
      paymentMethod: ['', Validators.required],
      // Add more form controls as needed
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.paymentForm.valid) {
      // Process payment here (e.g., send data to backend)
      console.log(this.paymentForm.value);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
