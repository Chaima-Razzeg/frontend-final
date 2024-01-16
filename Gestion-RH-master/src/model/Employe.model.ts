import { Poste } from './Poste.model';
import { Personne } from "./Personne.model";

export class Employe extends Personne{
    salaire!:number;
    contrat! : string;
    dateRecrutement!:Date;
    grade!: string;
    username!:string;
    mdp!:string;
    poste!: Poste;
    role : string = 'USER';
}