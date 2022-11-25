import { Component, OnInit, Input } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-forfait-long',
  templateUrl: './forfait-long.component.html',
  styleUrls: ['./forfait-long.component.css']
})
export class ForfaitLongComponent implements OnInit {
forfaits = FORFAITS
  constructor() { }

  ngOnInit(): void {
  }

}
