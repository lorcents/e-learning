import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Collection, Invoice, School } from '../models/model';

@Component({
  selector: 'app-collections-component',
  templateUrl: './collections-component.component.html',
  styleUrl: './collections-component.component.css'
})
export class CollectionsComponentComponent implements OnInit {
  selectedSchool: any = null;
  schools: School[] = []; 
  invoices: Invoice[] = []; 
  collection: Collection[] = [];

  constructor(private servicesService: ServicesService,public dialog: MatDialog,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadSchools();
    this.loadInvoices();
    this.loadCollection()
  }

  

  loadSchools(): void {
    this.servicesService.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  loadInvoices(): void {
    this.servicesService.getUpcomingInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
    });
  }

  loadCollection(): void {
    this.servicesService.getCollections().subscribe((ctln: Collection[]) => {
      this.collection = ctln;
    });
  }

  getINVNO(id:string){
    const foundInvNo = this.invoices.find(inv => inv.id == id);
    return foundInvNo ? foundInvNo.invoiceNumber : 'undefined';
  }

  validate(invoiceId: string) {
    this.servicesService.editSIngleCollection(invoiceId,{status:'valid'}).subscribe((res)=>{
      if(res){
        this.toastr.success('collection', 'updated sucessfully')
        this.loadCollection()
      }else{
        this.toastr.error('collection', 'Error updating collection')
      }
    })
    
  }

  bounceColection(invoiceId: string) {
    this.servicesService.editSIngleCollection(invoiceId,{status:'bounce'}).subscribe((res)=>{
      if(res){
        console.log(res)
        this.toastr.success('collection', 'updated sucessfully')
        this.loadCollection()
      }else{
        this.toastr.error('collection', 'Error updating collection')
      }
    })
  }
  
  exportInvoices(){
    this.toastr.info('Upcoming feature')

  }
  

}


