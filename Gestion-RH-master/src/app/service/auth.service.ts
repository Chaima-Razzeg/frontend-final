import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User.model';
import { EmployeService } from './employe.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 // idLoggedUser!: number;
  users: User[] = [
    {"username":"admin","password":"123","roles":['ADMIN']},
    {"username":"chaima","password":"123","roles":['USER']} ];
public loggedUser!:string;
public isloggedIn: Boolean = false;
public roles!:string[];

constructor(
  private router: Router) { }

logout() {
  this.isloggedIn= false;
  this.loggedUser = undefined!;
  this.roles = undefined!;
  localStorage.removeItem('loggedUser');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/home']);
  }
  SignIn(user :User):Boolean{
  let validUser: Boolean = false;
  this.users.forEach((curUser) => {
  if(user.username== curUser.username && user.password==curUser.password) {
  validUser = true;
  this.loggedUser = curUser.username;
  this.isloggedIn = true;
  this.roles = curUser.roles;
  localStorage.setItem('loggedUser',this.loggedUser);
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  //localStorage.setItem('idLoggedUser',String(this.idLoggedUser));
  }
  });
  return validUser;
  }
  isAdmin():Boolean{
    if (localStorage.getItem('roles') == 'ADMIN')
    return true;
    else
    return false;
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
    }
    getUserRoles(username :string){
    this.users.forEach((curUser) => {
    if( curUser.username == username ) {
    this.roles = curUser.roles;
    }
    });
    }
    isUser():Boolean{
      if (localStorage.getItem('roles') == 'USER')
      return true;
      else
      return false;
      }

      isNotAuthentificated():Boolean{
        return this.isloggedIn;
        }

}
