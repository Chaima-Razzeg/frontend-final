import { PosteService } from './../service/poste.service';
import { DepartementService } from './../service/departement.service';
import { EmployeService } from './../service/employe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countEmploye!: number;
  countDepartement! : number;
  countPoste! : number;

  constructor(private employeService : EmployeService,
    private departementService : DepartementService,
    private posteService : PosteService) { }

  ngOnInit(): void {
    this.employeService.countEmploye().subscribe((data)=>{
      this.countEmploye = data;
    });
    this.departementService.countDepartement().subscribe((data)=>{
      this.countDepartement = data;
    });
    this.posteService.countPoste().subscribe((data)=>{
      this.countPoste = data;
    });
  }

}
