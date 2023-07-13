import { HttpClient, HttpRequest } from '@angular/common/http';

export class API {
	private API_URL = 'http://localhost:8080/api/v1';
	// get jwt from cookies
	private Bearer: string = '';
	private authHearder: any;

	constructor() {
		document.cookie.split('; ').map((cookie) => {
			if (cookie.startsWith('jwt')) {
				this.Bearer = cookie.split('=')[1];
			}
		});

		this.authHearder = {
			headers: {
				Authorization: `Bearer ${this.Bearer}`,
			},
		};
	}

	public getCall(path: string, http: HttpClient): Promise<any> {
		return new Promise((resolve, reject) => {
			http.get(`${this.API_URL}/${path}`, this.authHearder).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}

	public getCallWithQuery(
		path: string,
		http: HttpClient,
		query: string
	): Promise<any> {
		return new Promise((resolve, reject) => {
			http.get(
				`${this.API_URL}/${path}?${query}`,
				this.authHearder
			).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}

	public getCallById(
		path: string,
		http: HttpClient,
		id: number
	): Promise<any> {
		return new Promise((resolve, reject) => {
			http.get(
				`${this.API_URL}/${path}/${id}`,
				this.authHearder
			).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}

	public postCall(path: string, http: HttpClient, body: any): Promise<any> {
		return new Promise((resolve, reject) => {
			http.post(
				`${this.API_URL}/${path}`,
				body,
				this.authHearder
			).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}

	public putCall(path: string, http: HttpClient, body: any): Promise<any> {
		return new Promise((resolve, reject) => {
			http.put(
				`${this.API_URL}/${path}`,
				body,
				this.authHearder
			).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}

	public deleteCall(
		path: string,
		http: HttpClient,
		id: number
	): Promise<any> {
		return new Promise((resolve, reject) => {
			http.delete(
				`${this.API_URL}/${path}/${id}`,
				this.authHearder
			).subscribe({
				next: (response: any) => resolve(response),
				error: (error) => reject(error),
			});
		});
	}
}
