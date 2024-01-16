import { Departement } from './Departement.model';
export class Poste{
    idPos!: number;
    nomPos!: string;
    descriptionPos!: string;
    competancesRequises!: string;
    departement!: Departement
}