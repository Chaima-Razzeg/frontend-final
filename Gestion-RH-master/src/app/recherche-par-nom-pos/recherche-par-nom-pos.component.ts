import { PosteService } from './../service/poste.service';
import { Component, OnInit } from '@angular/core';
import { Poste } from 'src/model/Poste.model';

@Component({
  selector: 'app-recherche-par-nom-pos',
  templateUrl: './recherche-par-nom-pos.component.html',
  styleUrls: ['./recherche-par-nom-pos.component.css']
})
export class RechercheParNomPosComponent implements OnInit {

  nomPos!: string;
  postes!: Poste[];

  allPostes! : Poste[];
  searchTerm!: string;
  constructor(private posteService : PosteService) { }

  ngOnInit(): void {
    this.posteService.listPoste().subscribe(data => {
      console.log(data);
      this.allPostes = data;
      });
  }
  rechercherPos(){
    this.posteService.rechercherParNomPos(this.nomPos).subscribe(data =>
      {
        console.log(data);
        this.postes=data;
      })
  }
  onKeyUp(filterText : string){
    this.postes = this.allPostes.filter(item =>
    item.nomPos.toLowerCase().includes(filterText));
    }

}
