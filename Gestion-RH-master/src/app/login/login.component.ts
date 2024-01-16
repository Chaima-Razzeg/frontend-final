import { Employe } from './../../model/Employe.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User.model';
import { AuthService } from '../service/auth.service';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur=0;
  employes!: Employe[];
  employe= new Employe();
  loggedUser!: string;
  isloggedIn!: boolean;
  roles!:String;
  idLoggedUser!: number;
  

  


  constructor(private authService : AuthService,private employeService: EmployeService, private router: Router) { }
  
    

  ngOnInit(): void {
    this.employeService.listEmploye().subscribe(
      (data)=> {this.employes = data;
      console.log(this.employes);

  }
    );
  }
  signin(employe:Employe):Boolean
      
  {
    let validUser: Boolean = false;
this.employes.forEach((curUser) => {
if(employe.username== curUser.username && employe.mdp==curUser.mdp) {
validUser = true;
this.loggedUser = curUser.username;
this.isloggedIn = true;
this.roles = curUser.role;
this.idLoggedUser = curUser.id;


localStorage.setItem('loggedUser',this.loggedUser);
localStorage.setItem('isloggedIn',String(this.isloggedIn));
localStorage.setItem('roles',String(this.roles));
localStorage.setItem('idLoggedUser',String(this.idLoggedUser));





}
});
return validUser;
}
isAdmin():Boolean{
  if (!this.roles) //this.roles== undefiened
  return false;
  return (this.roles.indexOf('ADMIN') >-1);
  }


  onLoggedin(){
    console.log(this.employe)
    
     let isValidUser: Boolean = this.signin(this.employe);
    if (isValidUser){
      if(this.authService.isAdmin())
      this.router.navigate(['dashboard']);
      else
      this.router.navigate(['profil']);

    }
    else
    //alert('Login ou mot de passe incorrecte!');
    this.erreur = 1;
    }

}