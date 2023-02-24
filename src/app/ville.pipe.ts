import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'ville'
})
export class VillePipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
  
    return forfaits.filter(forfait => forfait.etablissement.coordonnees.ville=='Québec');
  }

}
