import { PosteService } from './../service/poste.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/model/Employe.model';
import { Poste } from 'src/model/Poste.model';
import { EmployeService } from '../service/employe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  currentEmploye = new Employe();
  updatedPosId!: number;
  postes!: Poste[]

  constructor(private employeService:EmployeService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private posteService : PosteService) { }

  ngOnInit(): void {
    this.employeService.listPoste().subscribe(data => 
      {this.postes = data;
    console.log(data);
  });
    this.employeService.getEmployeById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentEmploye = data;
    this.updatedPosId = this.currentEmploye.poste.idPos;});
  
}
updateEmploye() {
  // Vérification des champs requis
  if (!this.currentEmploye.cin ||
      !this.currentEmploye.nom ||
      !this.currentEmploye.prenom ||
      !this.currentEmploye.dateNai ||
      !this.currentEmploye.tel ||
      !this.currentEmploye.adresse ||
      !this.currentEmploye.email ||
      !this.currentEmploye.dateRecrutement ||
      !this.currentEmploye.contrat ||
      !this.currentEmploye.grade ||
      !this.currentEmploye.salaire ||
      !this.currentEmploye.username ||
      !this.currentEmploye.mdp ||
      !this.updatedPosId) {
    Swal.fire({
      icon: 'error',
      title: 'Veuillez remplir tous les champs obligatoires',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  // Vérification de la validité du champ cin
  const cinRegex = /^[0-9]{8}$/;
  if (!cinRegex.test(this.currentEmploye.cin)) {
    Swal.fire({
      icon: 'error',
      title: 'Le numéro de CIN entré n\'est pas valide',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  // Vérification de la validité du nom
  if (!this.currentEmploye.nom || !this.currentEmploye.nom.match(/^[a-zA-Z]+$/)) {
    Swal.fire({
      icon: 'error',
      title: 'Le nom de l\employé entré n\'est pas valide',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  // Vérification de la validité du prenom
  if (!this.currentEmploye.prenom || !this.currentEmploye.prenom.match(/^[a-zA-Z]+$/)) {
    Swal.fire({
      icon: 'error',
      title: 'Le prenom de l\'employé entré n\'est pas valide',
      showConfirmButton: false,
      timer: 1500
    });
    return;
  }

  this.currentEmploye.poste = this.postes.find(cat => cat.idPos == this.updatedPosId)!;
  this.employeService.updateEmploye(this.currentEmploye).subscribe(data => {
    Swal.fire({
      icon: 'success',
      title: 'Employé modifié avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.router.navigate(['employes']);
    });
  });
};


}



