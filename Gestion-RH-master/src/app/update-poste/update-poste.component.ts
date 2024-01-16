import { Departement } from './../../model/Departement.model';
import { PosteService } from './../service/poste.service';
import { Component, OnInit } from '@angular/core';
import { Poste } from 'src/model/Poste.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-poste',
  templateUrl: './update-poste.component.html',
  styleUrls: ['./update-poste.component.css']
})
export class UpdatePosteComponent implements OnInit {

  currentPoste = new Poste();
  updatedDepId! : number;
  departements! : Departement[];



  constructor(  private router:Router,
    private activatedRoute : ActivatedRoute,
    private posteService : PosteService,
    private departementService : DepartementService

    ) { }

  ngOnInit(): void {
    this.posteService.listDepartement().subscribe(data => 
      {this.departements = data;
    console.log(data);
  });
    this.posteService.getPosteById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentPoste = data;
    this.updatedDepId = this.currentPoste.departement.idDep;});
    }
  updatePoste(){
    this.currentPoste.departement = this.departements.find
    (cat => cat.idDep == this.updatedDepId)!;
    this.posteService.updatePoste(this.currentPoste).subscribe(data => {

      Swal.fire({
        icon: 'success',
        title: 'Employé modifié avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['postes']);
      });  });


}


}
