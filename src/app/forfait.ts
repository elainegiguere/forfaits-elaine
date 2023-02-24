import { Etablissement } from "./etablissement";
import { Avis } from "./avis";

export interface Forfait {
    id?: string;
    urlImage?:string;
    nom: string;
    description: string;
    code: number;
    // categories: string[];
    etablissement: Etablissement;
    dateDeDebut: string;
    dateDeFin: string;
    prix:number;
    nouveauPrix?:number;
    // avis: Avis[];
    statut?:string;
}
