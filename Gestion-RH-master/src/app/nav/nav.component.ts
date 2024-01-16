import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    let isloggedin = localStorage.getItem('isloggedIn');
    let loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != 'true' || !loggedUser) this.router.navigate(['/home']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
  onLogout() {
    this.authService.logout();
  }


}
