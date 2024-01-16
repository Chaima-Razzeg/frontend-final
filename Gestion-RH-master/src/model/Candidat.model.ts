import { Poste } from './Poste.model';
import { Personne } from "./Personne.model";

export class Candidat extends Personne{
    pdfFile!: File;
    competances!:string;
    etat : String = 'en attente' ;
    poste!: Poste;
}