<<<<<<< Updated upstream
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
<<<<<<< Updated upstream
export class BarrasComponent   {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
    public barChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {},
        y: {
          min: 10
        }
      },
      plugins: {
        legend: {
          display: true,
        },
       
      }
    };
    public barChartType: ChartType = 'bar';
 
 
    public barChartData: ChartData<'bar'> = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    }; 
 
    public randomize(): void {
      // Only Change 3 values
      this.barChartData.datasets[0].data = [
        Math.round(Math.random() * 100),
        59,
        80,
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        40 ];
 
      this.chart?.update();
    }

=======
export class BarrasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> Stashed changes

}
