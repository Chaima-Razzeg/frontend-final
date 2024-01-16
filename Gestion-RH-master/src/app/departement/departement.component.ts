import { DepartementService } from './../service/departement.service';
import { Departement } from './../../model/Departement.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  allDepartements! : Departement[];
  nomDep!: string;

  departements!: Departement[];
  constructor(private departementService : DepartementService) { }

  ngOnInit(): void {
    this.departementService.listDepartement().subscribe((data)=> {
      this.departements = data;
      console.log(this.departements);
    })

    this.departementService.listDepartement().subscribe(data => {
      console.log(data);
      this.allDepartements = data;
      });
  }
  deleteDep(id: number) {
    Swal.fire({
      title: 'Vous êtes sûr ?',
      text: 'Vous ne pourrez pas récupérer ce département !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, annulez !',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.departementService.deleteDepartement(id).subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Succès!',
            text: 'Le département a été supprimé.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          });
          this.departementService.listDepartement().subscribe((data) => {
            this.departements = data;
            console.log(this.departements);
          });
        });
      }
    });
  }

  onKeyUp(filterText : string){
    this.departements = this.allDepartements.filter(item =>
    item.nomDep.toLowerCase().includes(filterText));
    }

}
