import { Component, OnInit } from '@angular/core';
import {  ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
   // Pie
   public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Target', 'Achieved' ],['Target']];
  public pieChartDatasets = [ {
    data: [ 300,500 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
  ngOnInit(): void {
      
  }
    
}