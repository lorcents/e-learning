export interface School {
  id: string;
  name: string;
  type: string;
  product: string;
  county: string;
  registrationDate: string;
  contactInfo: string;
  balance: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: string;
  dueDate: string;
  amountDue: number;
  paidAmount: number;
  balance: number;
  completionStatus: string;
  daysUntilDue: number;
  schoolId: string;
}

export interface createINV {
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: string;
  dueDate: string;
  amountDue: number;
  paidAmount: number;
  balance: number;
  completionStatus: string; 
  daysUntilDue: number;
  schoolId: string;
}

export interface Collection {
  id: string;
  collectionNumber: string;
  dateCollection: string;
  status: string;
  invoiceId: string;
  amount: number;
}
