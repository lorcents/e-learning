import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../models/model';
import { ServicesService } from '../services/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-schools-component',
  templateUrl: './schools-component.component.html',
  styleUrl: './schools-component.component.css'
})
export class SchoolsComponentComponent  implements OnInit {
  schools: School[] = [];

  constructor(private servicesService: ServicesService, private router: Router,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadSchools();
  }

  loadSchools(): void {
    this.servicesService.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
    });
  }

  viewSchoolDetails(schoolId: string): void {
    this.router.navigate(['/school-details', schoolId]);
  }
  exportSchools(){
    this.toastr.info('Upcoming feature')
  }
  addSchool(){
    this.toastr.info('Upcoming feature')

  }
}
