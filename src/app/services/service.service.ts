import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collection, Invoice, School, createINV } from '../models/model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUpcomingInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.apiUrl}/invoices`);
  }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(`${this.apiUrl}/schools`);
  }

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(`${this.apiUrl}/collection`);
  }

  editSIngleCollection(id: string, patchdata: any): Observable<Collection> {
    return this.http.patch<Collection>(`${this.apiUrl}/collection/${id}`, patchdata);
  }

  createInvoice(invoice: createINV): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.apiUrl}/invoices`, invoice);
  }

  deleteInvoice(id: string): Observable<Invoice[]> {
    return this.http.delete<Invoice[]>(`${this.apiUrl}/invoices/${id}`);
  }
}
