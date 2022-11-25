import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  @Input() forfait?='';
  constructor() { }

  ngOnInit(): void {
  }

}
