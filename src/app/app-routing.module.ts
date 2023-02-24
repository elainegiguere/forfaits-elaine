import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { ForfaitsVilleQcComponent } from './forfaits-ville-qc/forfaits-ville-qc.component';
import { ForfaitsBasPrixComponent } from './forfaits-bas-prix/forfaits-bas-prix.component';
import { ForfaitCourtComponent } from './forfait-court/forfait-court.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAProposComponent } from './page-a-propos/page-a-propos.component';
import { RechercheComponent } from './recherche/recherche.component';
import { PageGestionComponent } from './page-gestion/page-gestion.component';
import { PageCapitaleComponent } from './page-capitale/page-capitale.component';
import { PagePetitsPrixComponent } from './page-petits-prix/page-petits-prix.component';
import { PageRechercheComponent } from './page-recherche/page-recherche.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent},
  { path: 'a-propos', component: PageAProposComponent },
  { path:'quebec', component: PageCapitaleComponent},
  { path: 'petits-prix', component: PagePetitsPrixComponent},
  { path:'recherche', component: PageRechercheComponent},
  { path: 'gestion', component: PageGestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
