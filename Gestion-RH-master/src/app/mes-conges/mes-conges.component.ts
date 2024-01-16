import { EmployeService } from './../service/employe.service';
import { Conge } from 'src/model/Conge.model';
import { CongeService } from './../service/conge.service';
import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/model/Employe.model';

@Component({
  selector: 'app-mes-conges',
  templateUrl: './mes-conges.component.html',
  styleUrls: ['./mes-conges.component.css']
})
export class MesCongesComponent implements OnInit {

  conges!: Conge[];
  private emp!:String;
  employe= new Employe();
  employees! :Employe[];
  
  constructor(private congeService : CongeService,private employeservice:EmployeService) { }

  ngOnInit(): void {
    this.emp=localStorage.getItem('idLoggedUser')!;
    console.log(this.emp);
    this.employeservice.getEmployeById(Number(this.emp)).subscribe(
      (data)=> {this.employe = data;
      console.log(this.employe);
      
       } );

      this.congeService.listConge().subscribe((data)=>
      {
        this.conges=data;
        console.log(data);
        
  })
  }

}