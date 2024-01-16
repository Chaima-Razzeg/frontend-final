import { DepartementService } from './../service/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/model/Departement.model';
import { Poste } from 'src/model/Poste.model';
import { PosteService } from '../service/poste.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {

  postes!: Poste[];
  departements!: Departement[];
  allPostes! : Poste[];

  constructor(private posteService : PosteService,
    private departementService : DepartementService) { }

  ngOnInit(): void {
    this.posteService.listPoste().subscribe((data)=> {
      this.postes = data;
      console.log(this.postes);
    })
    this.posteService.listDepartement().subscribe((data)=> {
      this.departements = data;
      console.log(this.departements);
    })
    this.posteService.listPoste().subscribe(data => {
      console.log(data);
      this.allPostes = data;
      })

  }
  deletepos(id: number) {
    Swal.fire({
      title: 'Vous êtes sûr ?',
      text: 'Vous ne pourrez pas récupérer ce poste !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimez-le!',
      cancelButtonText: 'Non, annulez !',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.posteService.deletePoste(id).subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Succès!',
            text: 'Le poste a été supprimé.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          });
          this.posteService.listPoste().subscribe((data) => {
            this.postes = data;
            console.log(this.postes);
          });
        });
      }
    });
  }
  

  onKeyUp(filterText : string){
    this.postes = this.allPostes.filter(item =>
    item.nomPos.toLowerCase().includes(filterText));
    }

}
