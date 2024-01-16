import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/model/Conge.model';
import { CongeService } from '../service/conge.service';

@Component({
  selector: 'app-conge-valid',
  templateUrl: './conge-valid.component.html',
  styleUrls: ['./conge-valid.component.css']
})
export class CongeValidComponent implements OnInit {

  conges!: Conge[];

  constructor(private congeService : CongeService,
    private router : Router) { }

  ngOnInit(): void {
    this.congeService.listConge().subscribe(
      (data) => { this.conges = data;
        console.log(this.conges);
  })
  }
 

}
