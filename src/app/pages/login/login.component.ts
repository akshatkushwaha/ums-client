import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AuthState, login } from 'src/app/store/store';

import { AuthAPI } from 'src/app/shared/authAPI';

import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { saveCookie } from 'src/app/shared/comman';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	title = 'Login';
	username: string;
	password: string;
	showPassword: boolean = false;

	private authAPI: AuthAPI = new AuthAPI();

	constructor(
		private https: HttpClient,
		private router: Router,
		private store: Store<{ auth: AuthState }>,
		private toastr: ToastrService
	) {}

	ngOnInit() {}

	encryptPassword(password: string): string {
		try {
			return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
		} catch (error) {
			console.log(error);
			return '';
		}
	}

	async login() {
		const encryptedPassword = this.encryptPassword(this.password);

		const requestBody = {
			username: this.username,
			password: encryptedPassword,
		};

		await this.authAPI
			.login(this.https, requestBody)
			.then((response: any) => {
				// save response to cookies
				saveCookie(response);

				this.store.dispatch(
					login({
						username: response.username,
						firstName: response.firstName,
						lastName: response.lastName,
						role: response.role,
					})
				);

				this.username = '';
				this.password = '';

				this.router.navigate(['/departments']);
			})
			.catch((error) => {
				console.log(error);
				this.toastr.error(error.error.message, 'Login failed');
			});
	}
}
