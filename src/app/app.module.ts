import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import {MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import {FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import { ForfaitCourtComponent } from './forfait-court/forfait-court.component';
import { ForfaitLongComponent } from './forfait-long/forfait-long.component';
import { PrixComponent } from './prix/prix.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { PremiumPipe } from './premium.pipe';
// import { CategoriePipe } from './categorie.pipe';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { ForfaitService } from './forfait.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForfaitsVilleQcComponent } from './forfaits-ville-qc/forfaits-ville-qc.component';
import { ForfaitsBasPrixComponent } from './forfaits-bas-prix/forfaits-bas-prix.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageCapitaleComponent } from './page-capitale/page-capitale.component';
import { PagePetitsPrixComponent } from './page-petits-prix/page-petits-prix.component';
import { PageRechercheComponent } from './page-recherche/page-recherche.component';
import { PageGestionComponent } from './page-gestion/page-gestion.component';
import { PageAProposComponent } from './page-a-propos/page-a-propos.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphique1Component } from './graphique1/graphique1.component';
import { Graphique2Component } from './graphique2/graphique2.component';
import { FicheForfaitComponent } from './fiche-forfait/fiche-forfait.component';
import { PetitPrixPipe } from './petit-prix.pipe';
import { VillePipe } from './ville.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitCourtComponent,
    ForfaitLongComponent,
    FormulaireForfaitComponent,
    FormulaireAvisComponent,
    PrixComponent,
    RechercheComponent,
    FormulaireContactComponent,
    FormulaireAjoutComponent,
    PremiumPipe,
    // CategoriePipe,
    TableauForfaitsComponent,
    AProposComponent,
    NavigationComponent,
    FooterComponent,
    ForfaitsVilleQcComponent,
    ForfaitsBasPrixComponent,
    PageAccueilComponent,
    PageCapitaleComponent,
    PagePetitsPrixComponent,
    PageRechercheComponent,
    PageGestionComponent,
    PageAProposComponent,
    Graphique1Component,
    Graphique2Component,
    FicheForfaitComponent,
    PetitPrixPipe,
    VillePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatSidenavModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    NgChartsModule,
    MatDividerModule
    
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
