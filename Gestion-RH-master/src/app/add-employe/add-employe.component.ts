import { PosteService } from './../service/poste.service';
import { Poste } from './../../model/Poste.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/model/Employe.model';
import { EmployeService } from '../service/employe.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();
  employes!: Employe[];
  postes!: Poste[];

  newIdPos! : number;
  newPoste! : Poste;
  constructor(private employeService:EmployeService,
    private router:Router,
    private posteService : PosteService) { }

  ngOnInit(): void {
    this.employeService.listEmploye().subscribe(data =>
      {this.employes = data;
      console.log(data);
    })
    this.posteService.listPoste().subscribe(data =>{
      this.postes = data;
      console.log(data);
    })}
    addEmploye() {
      // Vérification des champs requis
      if (!this.newEmploye.cin ||
          !this.newEmploye.nom ||
          !this.newEmploye.prenom ||
          !this.newEmploye.dateNai ||
          !this.newEmploye.tel ||
          !this.newEmploye.adresse ||
          !this.newEmploye.email ||
          !this.newEmploye.dateRecrutement ||
          !this.newEmploye.contrat ||
          !this.newEmploye.grade ||
          !this.newEmploye.salaire ||
          !this.newEmploye.username ||
          !this.newEmploye.mdp ||
          !this.newIdPos) {
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
                  if (!cinRegex.test(this.newEmploye.cin)) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Le numéro de CIN entré n\'est pas valide',
                      showConfirmButton: false,
                      timer: 1500
                    });
                    return;
                  }
                        //Vérification de la validité du nom
      if (!this.newEmploye.nom || !this.newEmploye.nom.match(/^[a-zA-Z]+$/)) {
        Swal.fire({
          icon: 'error',
          title: 'Le nom de l\employé entré n\'est pas valide',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }
          // Vérification de la validité du prenom
          if (!this.newEmploye.prenom || !this.newEmploye.prenom.match(/^[a-zA-Z]+$/)) {
            Swal.fire({
              icon: 'error',
              title: 'Le prenom de l\'employé entré n\'est pas valide',
              showConfirmButton: false,
              timer: 1500
            });
            return;
          }
        
          
      // Vérification de la validité du champ email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.newEmploye.email)) {
        Swal.fire({
          icon: 'error',
          title: 'L\'email entré n\'est pas valide',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }


      // Vérification de la validité du champ téléphone
      const telRegex = /^[0-9]{8}$/;
      if (!telRegex.test(this.newEmploye.tel)) {
        Swal.fire({
          icon: 'error',
          title: 'Le numéro de téléphone entré n\'est pas valide',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }

      // Vérification de la validité du champ salaire
      const salaireRegex = /^[0-9]+(\.[0-9]{1,2})?$/;

    
      // Si tous les champs sont valides, on peut ajouter l'employé
      this.newEmploye.poste = this.postes.find(cat => cat.idPos == this.newIdPos)!;
      this.employeService.addEmploye(this.newEmploye).
      subscribe(data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Employé ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['employes']);
        });
      });
    }
    }
