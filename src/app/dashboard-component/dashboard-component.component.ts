import { Component } from '@angular/core';

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
export class DashboardComponentComponent {
  selectedDashboard: string = 'analytics';
  products = products; // Import from zeraki-analytics.model.ts

  constructor() {}

  ngOnInit(): void {}

  updateCharts(){}

  getTooltipText(value: number, total: number): string {
    return `${value.toLocaleString()} (${((value / total) * 100).toFixed(1)}%)`;
  }
}
