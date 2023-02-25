import { Component, OnInit, Input, ViewChild, EventEmitter, Inject, Output, TemplateRef } from '@angular/core';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIfContext } from '@angular/common';


@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent implements OnInit {


  @Output() fortaitAjoute =new EventEmitter
  dataSourceForfait: MatTableDataSource<Forfait> = new MatTableDataSource();
  displayedColumns: string[] = ['nom','code', 'dateDeDebut', 'dateDeFin', 'actions'];
 Forfait : Forfait = {
    urlImage:'',
    nom: '',
    description: '',
    code:0, 
    etablissement:{
      nom: '',       
      coordonnees: 
          {
          adresse:'',
          ville: '',
          telephone: '', 
          courriel: '',
          siteWeb:'',
      },
      description: '',
    },
    dateDeDebut: '',
    dateDeFin: '',
    prix:0,
    nouveauPrix: 0,
    statut: ''
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


ForfaitFormAjout: any;

  constructor(private forfaitService: ForfaitService, 
    public dialogRef: MatDialogRef<FormulaireAjoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait) { 
      if (data){
        console.log('chargement des données');
        console.log(data);
        this.Forfait = data;
      }
    }

  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits() { 
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        this.dataSourceForfait = new MatTableDataSource(resultat);
        this.dataSourceForfait.paginator = this.paginator;
        this.dataSourceForfait.sort = this.sort;
      }
    );
  }
  addForfait(forfaitFormAjout: NgForm) { 
    if (forfaitFormAjout.valid) { 
      this.forfaitService.addForfait(this.Forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.getForfaits();  
            this.fortaitAjoute.emit();
            this.dialogRef.close();
          }
      );
    }
  }

  updateForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
      this.forfaitService.updateForfait(this.Forfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.dialogRef.close();
        }
      );
    }
  }

  annuler() { 
    this.dialogRef.close();
  }

}
