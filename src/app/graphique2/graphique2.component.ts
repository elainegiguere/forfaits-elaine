import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.css']
})
export class Graphique2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

   // scatter
  public scatterChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public scatterChartLabels: string[] = [ 'Chasse', 'Pêche', 'Randonnée' ];

  public scatterChartData: ChartData<'scatter'> = {
    labels: this.scatterChartLabels,
    datasets: [
      {
        data: [
          { x: 300, y: 25 },
          { x: 400, y: 15 },
          { x: 255, y: 28 },
          { x: 200, y: 30 },
        ],
        label: 'Series A',
        pointRadius: 20,
      },
    ]
  };
  public scatterChartType: ChartType = 'scatter';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}