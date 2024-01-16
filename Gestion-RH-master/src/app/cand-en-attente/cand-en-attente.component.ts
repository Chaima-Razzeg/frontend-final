import { Router } from '@angular/router';
import { CandidatService } from './../service/candidat.service';
import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/model/Candidat.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cand-en-attente',
  templateUrl: './cand-en-attente.component.html',
  styleUrls: ['./cand-en-attente.component.css']
})
export class CandEnAttenteComponent implements OnInit {

  candidats!: Candidat[];
  newCandidat = new Candidat;
  constructor(private candidatService : CandidatService,
    private router : Router) { }

  ngOnInit(): void {
    this.candidatService.listCandidat().subscribe(
      (data) => { this.candidats = data;
        console.log(this.candidats);
  })
  }
  deletcan(id: number) {
    Swal.fire({
      title: 'Vous êtes sûr ?',
      text: 'Vous ne pourrez pas récupérer ce candidat !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, refusez-le!',
      cancelButtonText: 'Non, annulez !',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    }).then((result) => {
      if (result.value) {
        this.candidatService.deleteCandidat(id).subscribe((data) => {
          console.log(data);
          Swal.fire({
            title: 'Succès!',
            text: 'Le candidat a été refusé.',
            icon: 'success',
            confirmButtonColor: '#3085d6'
          }).then(() => {
            this.candidatService.listCandidat().subscribe((data) => {
              this.candidats = data;
              console.log(this.candidats);
            });
          });
        });
      }
    });
  }
  
/*   addCandidat(){
    this.candidatService.addCandidat(this.newCandidat).
    subscribe(data => {console.log(data);
    this.router.navigate(['candValid']);
  });
  } */
/*   addCandValid(id : number){
    this.candidatService.getCandidatById(id).
    subscribe(data => {    this.candidatService.updateCandidat(data).subscribe
      (data => {data.etat="done", console.log(data);
  });
 } )
  } */
  setEtat(can :Candidat){
    can.etat="valide";
}
  modif(id : number){
    this.candidatService.getCandidatById(id).subscribe(data =>  {this.setEtat(data),
      this.candidatService.updateCandidat(data).subscribe
      (data => {console.log(data); 
        window.location.reload();

  });
    } )

  }};

   

  


