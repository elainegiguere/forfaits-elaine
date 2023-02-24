import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'petitPrix'
})
export class PetitPrixPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.prix <= 500 || (forfait.nouveauPrix && forfait.nouveauPrix <= 500) ); 
  }

}


// || forfait.nouveauPrix <= 500 ( je veux ajouter forfait.nouveauPrix != null && forfait.nouveauPrix <= 500 )