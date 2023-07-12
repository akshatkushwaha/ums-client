import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '../store/store';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
	constructor(
		private router: Router,
		private store: Store<{ auth: AuthState }>
	) {}

	ngOnInit(): void {}

	logout() {
		console.log('logout');

		document.cookie = `jwt=; expires=${new Date(
			new Date().getTime() - 10 * 24 * 60 * 60 * 1000 // 10 days ago
		).toUTCString()}`;
		document.cookie = `refreshToken=; expires=${new Date(
			new Date().getTime() - 7 * 24 * 60 * 60 * 1000 // 7 days ago
		).toUTCString()}`;
		this.router.navigate(['/login']);
		localStorage.removeItem('username');
	}
}
