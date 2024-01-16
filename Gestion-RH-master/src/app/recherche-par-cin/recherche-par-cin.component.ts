import { EmployeService } from './../service/employe.service';
import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/model/Employe.model';

@Component({
  selector: 'app-recherche-par-cin',
  templateUrl: './recherche-par-cin.component.html',
  styles: [
  ]
})
export class RechercheParCinComponent implements OnInit {

  employes! : Employe[];
  cin! : number;

  constructor(private employeService : EmployeService,) { }

  ngOnInit(): void {
    this.employeService.listEmploye().subscribe(
      (data)=> {this.employes = data;
      console.log(this.employes);
    })
  }
  rechercherEmp(){
    this.employeService.rechercherParCin(this.cin).
    subscribe(data => {
    this.employes = data;
    console.log(data)
    });
    }


}
