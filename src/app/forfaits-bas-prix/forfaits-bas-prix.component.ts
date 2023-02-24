import { Component, OnInit } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfaits-bas-prix',
  templateUrl: './forfaits-bas-prix.component.html',
  styleUrls: ['./forfaits-bas-prix.component.css']
})
export class ForfaitsBasPrixComponent implements OnInit {
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
