import { Component, OnInit} from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-court',
  templateUrl: './forfait-court.component.html',
  styleUrls: ['./forfait-court.component.css']
})
export class ForfaitCourtComponent implements OnInit {
  forfaits = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
