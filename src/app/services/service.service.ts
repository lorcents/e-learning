import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice,School} from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getUpcomingInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>('http://localhost:3000/invoices');
  }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>('http://localhost:3000/schools');
  }
}
