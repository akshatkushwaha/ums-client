import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
	constructor(
		private router: Router // private store: Store<{ isAuthenticated: boolean }>
	) {}

	ngOnInit(): void {
		const username = localStorage.getItem('username') || '';
		document.cookie.split('; ').map((cookie) => {
			if (cookie.startsWith('jwt=')) {
			}
		});
	}

	navigateLogin() {
		this.router.navigate(['/login']);
	}

	logout() {
		document.cookie = `jwt=; expires=${new Date(
			new Date().getTime() - 10 * 24 * 60 * 60 * 1000
		).toUTCString()}`;
		document.cookie = `refreshToken=; expires=${new Date(
			new Date().getTime() - 7 * 24 * 60 * 60 * 1000
		).toUTCString()}`;
		this.router.navigate(['/login']);
		localStorage.removeItem('username');
	}
}
