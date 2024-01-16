import { EmployeService } from './../service/employe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/model/Conge.model';
import { CongeService } from '../service/conge.service';
import { Employe } from 'src/model/Employe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  
  conges!: Conge[];
  newConge = new Conge();
  employe= new Employe;
  employes!: Employe[];
   emp!:String;
  constructor(private congeService: CongeService,
    private employeservice:EmployeService,
    private router : Router) { }

  ngOnInit(): void {
    this.emp=localStorage.getItem('idLoggedUser')!;
    console.log(this.emp);
    this.employeservice.listEmploye().subscribe(
      (data)=> {this.employes = data;
      console.log(this.employes);
      } );
     this.employeservice.getEmployeById(Number(this.emp)).subscribe(
      
      (data)=> {this.employe = data;
      console.log(this.employe);
      
       } );
  }
  addConge() {
    console.log(this.newConge);
  
    this.congeService.addConge(this.newConge).subscribe((data) => {
      this.newConge = data;
      this.newConge.employe = this.employe;
      this.newConge.employe.id = Number(this.emp);
      this.congeService.addConge(this.newConge).subscribe((data) => {
        this.newConge = data;
        console.log(this.newConge);
        // display success notification using Sweet Alert

            Swal.fire({
              icon: 'success',
              title: 'Votre demande a été envoyé avec succès',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              this.router.navigate(['conges']);
            });
        });
      });
    };
  }
  
  



