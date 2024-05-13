import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.css'
})
export class BarGraphComponent {
  title = 'bar-graph';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'primary', 'secondary', 'IGSE'],
    datasets: [
      { data: [ 1, 0, 3 ], label: 'Zeraki Analytics' },
      { data: [ 2, 2, 0 ], label: 'Zeraki Finance' },
      { data: [ 1, 10, 4 ], label: 'Zeraki Timetable' }
    ]
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor() {
  }
}
