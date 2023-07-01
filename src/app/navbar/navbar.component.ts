import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  navigateLogin() {
    this.router.navigate(['/login']);
  }
}
