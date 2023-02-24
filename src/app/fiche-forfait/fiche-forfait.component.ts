import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-fiche-forfait',
  templateUrl: './fiche-forfait.component.html',
  styleUrls: ['./fiche-forfait.component.css']
})
export class FicheForfaitComponent implements OnInit {
@Input() f: Forfait = {
  nom: '',
  description: '',
  code: 0,
  etablissement: {
    coordonnees: {
      adresse:'', 
      courriel:'', 
      siteWeb:'', 
      telephone:'',
      ville:''
    }, 
    description:'', 
    nom:''
  },
  dateDeDebut: '',
  dateDeFin: '',
  prix: 0
};

  constructor() { }

  ngOnInit(): void {

  }



}
