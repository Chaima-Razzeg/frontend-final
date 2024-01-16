import { Router } from '@angular/router';
import { CandidatService } from './../service/candidat.service';
import { Candidat } from './../../model/Candidat.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {

  candidats!: Candidat[];
  newCandidat = new Candidat;




  constructor(private candidatService: CandidatService,
    private router : Router) { }


  ngOnInit(): void {
  }
  addCandidat(){
    this.candidatService.addCandidat(this.newCandidat).
    subscribe(data => {console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Candidature envoyée avec succès',
        showConfirmButton: false,
        timer: 1500
      });
            this.router.navigate(['home']);
    });
  }

}
