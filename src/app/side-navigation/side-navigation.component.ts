import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent {
  isHomeActive: boolean = false;
  isSchoolActive: boolean = false;

  constructor(private toastr: ToastrService) { }

  toggleHomeActive() {
    this.isHomeActive = !this.isHomeActive;
  }

  toggleSchoolActive() {
    this.isSchoolActive = !this.isSchoolActive;
  }
  logout(){
    this.toastr.info('Upcoming feature')

  }
  openSettings(){
    this.toastr.info('Upcoming feature')
    
  }
}

