import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent {
  isHomeActive: boolean = false;
  isSchoolActive: boolean = false;

  constructor() { }

  toggleHomeActive() {
    this.isHomeActive = !this.isHomeActive;
  }

  toggleSchoolActive() {
    this.isSchoolActive = !this.isSchoolActive;
  }
  logout(){

  }
  openSettings(){
    
  }
}

