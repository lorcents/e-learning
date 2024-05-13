import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() pieChartData: { name: string, value: number }[] = [];

  // Pie chart options and other properties
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: any[] = [];
  public pieChartLegend = true;
  public pieChartPlugins: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateChart();
  }

  ngOnChanges(): void {
    this.updateChart();
  }

  private updateChart(): void {
    // Update chart data and labels based on input data
    this.pieChartLabels = this.pieChartData.map(data => data.name);
    this.pieChartDatasets = [{ data: this.pieChartData.map(data => data.value) }];
  }
}
