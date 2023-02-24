import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];

  constructor(private forfaitService:ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe (resultat => this.forfaits = resultat);
  }

}
