import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/model/Candidat.model';
import { CandidatService } from '../service/candidat.service';

@Component({
  selector: 'app-cand-valid',
  templateUrl: './cand-valid.component.html',
  styleUrls: ['./cand-valid.component.css']
})
export class CandValidComponent implements OnInit {
  candidats!: Candidat[];


  constructor(private candidatService : CandidatService,
    private router : Router) { }

  ngOnInit(): void {
    this.candidatService.listCandidat().subscribe(
      (data) => { this.candidats = data;
        console.log(this.candidats);
  })

    }

  }




