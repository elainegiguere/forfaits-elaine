import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.css']
})
export class Graphique1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Expédition Nature', 'Chasse au petit gibier', 'Arbraska', 'Casino Royale', 'Chic-Chocs', 'Voyage de pêche', 'Pêche aux crapeaux'],
    datasets: [
      { data: [500, 500, 499, 550, 350, 250, 200 ], label: 'rabais' },
      { data: [600, 700, 500, 600, 400, 300, 300], label: 'prix régulier' }
    ]
  };

}
