import { Component, OnInit } from '@angular/core';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfaits-ville-qc',
  templateUrl: './forfaits-ville-qc.component.html',
  styleUrls: ['./forfaits-ville-qc.component.css']
})
export class ForfaitsVilleQcComponent implements OnInit {
  forfaits: Forfait[] = [];
f: any;

  constructor(private forfaitService:ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe (resultat => this.forfaits = resultat);
  }

}
