import { Employe } from 'src/model/Employe.model';
import { EmployeService } from './../service/employe.service';
import { CongeService } from './../service/conge.service';
import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/model/Conge.model';
import {Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-en-attente',
  templateUrl: './conge-en-attente.component.html',
  styleUrls: ['./conge-en-attente.component.css']
})
export class CongeEnAttenteComponent implements OnInit {

  conges!: Conge[];
  newConge= new Conge;
  employes!: Employe[];
  nbjours! : number;
  con!:Conge;
  conge: Conge = new Conge();
  nbJoursConge!: number;
  constructor(private congeService : CongeService,
    private router : Router,
    private employeService : EmployeService) { }

  ngOnInit(): void {
    this.congeService.listConge().subscribe(
      (data) => { this.conges = data;
        console.log(this.conges);
  })
  this.employeService.listEmploye().subscribe(
    (data) => { this.employes = data;
      console.log(this.employes);})

      this.calculerNbJoursConge();

  }
  calculerNbJoursConge() {
    this.congeService.nbConge(this.conge).subscribe(nbJours => {
      this.nbJoursConge = nbJours;
    });
  }
  deletcon(id: number) {
    Swal.fire({
      title: 'Vous êtes sûr ?',
      text: 'Vous ne pourrez pas récupérer cette demande de congé !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, refusez-le!',
      cancelButtonText: 'Non, annulez !',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.congeService.getCongeById(id).subscribe((data) => {
          this.setStatus1(data);
          this.congeService.updateConge(data).subscribe((data) => {
            console.log(data);
            Swal.fire({
              title: 'Succès!',
              text: 'Le congé a été refusé.',
              icon: 'success',
              confirmButtonColor: '#3085d6'
            }).then(() => {
              window.location.reload();
            });
          });
        });
      }
    });
  }
  
  setStatus(con: Conge){
    con.statusCon="valide";
}
setStatus1(con: Conge){
  con.statusCon="refuser";
}
 modif(id : number){
    this.congeService.getCongeById(id).subscribe(data =>  {this.setStatus(data),
      this.congeService.updateConge(data).subscribe
      (data => {console.log(data); 
        window.location.reload();

  });
    } )

  }}


