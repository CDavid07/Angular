import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: [
  ]
})
export class RadarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
<<<<<<< Updated upstream
  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];
 
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
    ]
  };
  public radarChartType: ChartType = 'radar';

} 
=======

}
>>>>>>> Stashed changes
