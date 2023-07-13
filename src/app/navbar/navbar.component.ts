import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState, login, logout } from '../store/store';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
	isLoggedIn$: Observable<boolean> = this.store.pipe(
		select((state) => state.auth.isLoggedIn)
	);

	constructor(
		private router: Router,
		private store: Store<{ auth: AuthState }>
	) {}

	ngOnInit(): void {
		if (localStorage.getItem('username') === null) {
			this.router.navigate(['/login']);
		} else {
			this.store.dispatch(
				login({
					username: localStorage.getItem('username') as string,
					firstName: localStorage.getItem('firstName') as string,
					lastName: localStorage.getItem('lastName') as string,
					role: localStorage.getItem('role') as string,
				})
			);
		}
	}

	logout() {
		this.store.dispatch(logout());

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
