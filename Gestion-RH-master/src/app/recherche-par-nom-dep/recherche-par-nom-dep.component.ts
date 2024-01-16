import { DepartementService } from './../service/departement.service';
import { Departement } from './../../model/Departement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-par-nom-dep',
  templateUrl: './recherche-par-nom-dep.component.html',
  styleUrls: ['./recherche-par-nom-dep.component.css']
})
export class RechercheParNomDepComponent implements OnInit {
  nomDep!: string;
  departements!: Departement[];

  allDepartements! : Departement[];
  searchTerm!: string;
  constructor(private departementService : DepartementService) { }

  ngOnInit(): void {
    this.departementService.listDepartement().subscribe(data => {
      console.log(data);
      this.allDepartements = data;
      });
  }
  rechercherDep(){
    this.departementService.rechercherParNomDep(this.nomDep).subscribe(data =>
      {
        console.log(data);
        this.departements=data;
      })
  }
  onKeyUp(filterText : string){
    this.departements = this.allDepartements.filter(item =>
    item.nomDep.toLowerCase().includes(filterText));
    }

}
