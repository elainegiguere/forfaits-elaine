import { Component, OnInit} from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-forfait-court',
  templateUrl: './forfait-court.component.html',
  styleUrls: ['./forfait-court.component.css']
})
export class ForfaitCourtComponent implements OnInit {
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
