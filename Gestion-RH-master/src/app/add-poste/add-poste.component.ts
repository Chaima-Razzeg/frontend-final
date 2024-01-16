import { Departement } from './../../model/Departement.model';
import { PosteService } from './../service/poste.service';
import { Component, OnInit } from '@angular/core';
import { Poste } from 'src/model/Poste.model';
import { Router } from '@angular/router';
import { DepartementService } from '../service/departement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-poste',
  templateUrl: './add-poste.component.html',
  styleUrls: ['./add-poste.component.css']
})
export class AddPosteComponent implements OnInit {

  newPoste = new Poste();
  postes!: Poste[];
  departements!: Departement[];

  newIdDep! : number;
 newDepartement! : Departement;

  constructor(private posteService : PosteService,
    private router:Router,
    private departementService : DepartementService
    ) { }

  ngOnInit(): void {
    this.posteService.listPoste().subscribe(data =>
      {this.postes = data;
      console.log(data);
    })
    this.departementService.listDepartement().subscribe(data =>
      {this.departements = data;
      console.log(data);
    })

  }
  addPoste(){
    this.newPoste.departement=this.departements.find(cat => cat.idDep == this.newIdDep)!;
    this.posteService.addPoste(this.newPoste).
    subscribe(data => {console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Poste ajouté avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.router.navigate(['postes']);
      });  });
  }

}
