import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthAPI } from 'src/app/shared/authAPI';

import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

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

	constructor(private https: HttpClient, private router: Router) {}

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
				document.cookie = `jwt=${
					response.access_token
				}; expires=${new Date(
					new Date().getTime() + 10 * 24 * 60 * 60 * 1000
				).toUTCString()}`;
				document.cookie = `refreshToken=${
					response.refresh_token
				}; expires=${new Date(
					new Date().getTime() + 7 * 24 * 60 * 60 * 1000
				).toUTCString()}`;
				localStorage.setItem('username', this.username);
			});

		this.username = '';
		this.password = '';
		this.firstName = '';
		this.lastName = '';

		alert('Register success!');

		this.router.navigate(['/departments']);
	}
}
