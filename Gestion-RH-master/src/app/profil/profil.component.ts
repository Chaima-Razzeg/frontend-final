import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/model/Employe.model';
import { Poste } from 'src/model/Poste.model';
import Swal from 'sweetalert2';
import { EmployeService } from '../service/employe.service';
import { PosteService } from '../service/poste.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  updatedPosId!: number;
  postes!: Poste[]
  id!: number;
  private emp!:String;
  employe= new Employe();

  constructor(private employeService:EmployeService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private posteService : PosteService) { }

    ngOnInit(): void {
      this.emp=localStorage.getItem('idLoggedUser')!;
      console.log(this.emp);
      this.employeService.getEmployeById(Number(this.emp)).subscribe(
        (data)=> {this.employe = data;
        console.log(this.employe);
        
         } );
  
        
          
    }
    
  
  
  
  

  

    updateEmploye() {
 this.employeService.updateEmploye(this.employe).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Vos coordonnées  ont été modifiées avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['profil']);
        });
      });
    };

    
 } 
    
    
    
    


