import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { Collection, Invoice, School } from '../models/model';

export interface ZerakiProduct {
  name: string;
  target: number;
  achieved: number;
  signupDistribution: {
    primary: number;
    secondary: number;
    igcse: number;
  };
}

export const products: ZerakiProduct[] = [
  {
    name: 'Zeraki Analytics',
    target: 1000,
    achieved: 850,
    signupDistribution: {
      primary: 300,
      secondary: 400,
      igcse: 150,
    },
  },
];

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrl: './dashboard-component.component.css',
})
export class DashboardComponentComponent implements OnInit {
  selectedDashboard: string = 'analytics';
  pieChartData: any[] =[];
  products = products;
  schools: School[] = [];
  invoices:Invoice[] =[];
  collections:Collection[]=[];
  collectionCont:number=0;
  schoolCount:number=0;
  bouncedCheque:number=0
  totalRevenue:number=0

  constructor(private servicesservice: ServicesService) {
    this.updateChartData('analytics'); 
  }
  updateCharts() {
    this.updateChartData(this.selectedDashboard);
  }

  updateChartData(selectedOption: string) {
    // Update pie chart data based on selected option
    switch (selectedOption) {
      case 'analytics':
        this.pieChartData = [
          { name: 'Target Expected', value: 20 },
          { name: 'Target Achieved', value: 5 },
        ];
        break;
      case 'finance':
        this.pieChartData = [
          { name: 'Target Expected', value: 50 },
          { name: 'Target Achieved', value: 10 },
        ];
        break;
      case 'timetable':
        this.pieChartData = [
          { name: 'Target Expected', value: 100 },
          { name: 'Target Achieved', value: 80 },
        ];
        break;
      default:
        this.pieChartData = [];
        break;
    }
  }

  ngOnInit(): void {
    this.servicesservice.getSchools().subscribe((schools: School[]) => {
      this.schools = schools;
      this.schoolCount=this.schools.length
    });
    this.servicesservice.getUpcomingInvoices().subscribe((inv: Invoice[]) => {
      this.invoices = inv;
      
    });
    this.servicesservice.getCollections().subscribe((cltn: Collection[]) => {
      this.collections = cltn;
      this.collectionCont=this.collections.length
      this.collections.forEach(collection => {
        this.totalRevenue += collection.amount;
        if (collection.status === 'bounce') {
          this.bouncedCheque++;
        }
      });
    });
  }


  getTooltipText(value: number, total: number): string {
    return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
  }
}
