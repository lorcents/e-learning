
  export interface School {
    id: number;
    name: string;
    type: string;
    product: string; 
    county: string;
    registrationDate: string; 
    contactInfo: string;
    balance: number;
  }
  
  export interface Invoice {
    id: number;
    invoiceNumber: string;
    invoiceItem: string;
    creationDate: Date;
    dueDate: string;
    amountDue: number;
    paidAmount: number;
    balance: number;
    completionStatus: string; // 'Completed' or 'Pending'
    daysUntilDue: number;
    schoolName: string;
    schoolId:number
  }