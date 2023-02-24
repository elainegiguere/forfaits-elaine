import { Component, OnInit, Input } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait-long',
  templateUrl: './forfait-long.component.html',
  styleUrls: ['./forfait-long.component.css']
})
export class ForfaitLongComponent implements OnInit {
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
