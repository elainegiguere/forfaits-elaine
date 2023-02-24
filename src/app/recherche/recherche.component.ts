import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  @Input() categorie: string ='';
  @Output() categorieChange = new EventEmitter();

  @Input() ville: string ='';
  @Output() villeChange = new EventEmitter();

  change(nouvelleValeur:string) {
    this.categorieChange.emit(nouvelleValeur);
  }

  changeVille(nouvelleValeur:string) {
    this.villeChange.emit(nouvelleValeur);  
  }


  isChecked = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}

