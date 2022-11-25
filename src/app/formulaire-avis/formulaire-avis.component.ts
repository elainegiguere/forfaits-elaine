import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulaire-avis',
  templateUrl: './formulaire-avis.component.html',
  styleUrls: ['./formulaire-avis.component.css']
})
export class FormulaireAvisComponent implements OnInit {
@Input() forfait?='';
  constructor() { }

  ngOnInit(): void {
  }

}
