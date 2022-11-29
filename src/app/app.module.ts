import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { ForfaitCourtComponent } from './forfait-court/forfait-court.component';
import { ForfaitLongComponent } from './forfait-long/forfait-long.component';
import { FormsModule } from '@angular/forms';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';

import {FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';
import {MatNativeDateModule } from '@angular/material/core';
import { PrixComponent } from './prix/prix.component';
import { RechercheComponent } from './recherche/recherche.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitCourtComponent,
    ForfaitLongComponent,
    FormulaireForfaitComponent,
    FormulaireAvisComponent,
    PrixComponent,
    RechercheComponent
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
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
