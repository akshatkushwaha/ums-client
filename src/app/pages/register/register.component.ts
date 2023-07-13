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
	selector: 'app-register',
	templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
	Title = 'Register';
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
	showPassword: boolean = false;

	private authAPI: AuthAPI = new AuthAPI();

	constructor(
		private https: HttpClient,
		private router: Router,
		private store: Store<{ auth: AuthState }>,
		private toastr: ToastrService
	) {}

	ngOnInit(): void {}

	encryptPassword(password: string): string {
		try {
			return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
		} catch (error) {
			console.log(error);
			return '';
		}
	}

	async register() {
		this.role = 'ADMIN';

		const encryptedPassword = this.encryptPassword(this.password);

		const requestBody = {
			username: this.username,
			password: encryptedPassword,
			firstName: this.firstName,
			lastName: this.lastName,
			role: this.role,
		};

		await this.authAPI
			.register(this.https, requestBody)
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
				this.firstName = '';
				this.lastName = '';

				this.router.navigate(['/departments']);
			})
			.catch((error) => {
				this.toastr.error(error.error.message, 'Error');
			});
	}
}
