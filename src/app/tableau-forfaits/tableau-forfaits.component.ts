import { Component, OnInit, ViewChild } from '@angular/core';
import { FORFAITS } from '../mock-forfaits';
import { ForfaitService } from '../forfait.service';
import { Forfait } from '../forfait';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireAjoutComponent } from '../formulaire-ajout/formulaire-ajout.component';

@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {
  dataSourceForfait: MatTableDataSource<Forfait> = new MatTableDataSource();
  displayedColumns: string[] = ['nom','code', 'dateDeDebut', 'dateDeFin', 'actions'];
  newForfait : Forfait = {
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

  constructor(private forfaitService: ForfaitService, public dialog: MatDialog) { 

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
      this.forfaitService.addForfait(this.newForfait).subscribe(
        _ => {
          forfaitFormAjout.resetForm();
          this.getForfaits();         }
      );
    }
  }


  deleteForfait(id: string) { 
    this.forfaitService.deleteForfait(id).subscribe(
      _ => {
        this.getForfaits();
        // this._snackBar.open("Pouf! Parti!", undefined, {
        //   duration: 2000
        // });
      }
    );
  }

  openDialog(forfait?: Forfait) { 
    console.log(forfait);
    const dialogRef = this.dialog.open(FormulaireAjoutComponent, {
        data: forfait,
      });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire forfait a été fermé');
      this.getForfaits();
    });
  }


  ngAfterViewInit() {  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfait.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfait.paginator) {
      this.dataSourceForfait.paginator.firstPage();
    }
  }



}
