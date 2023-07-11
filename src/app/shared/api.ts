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

	public getCall(path: string, http: HttpClient) {
		return http.get(`${this.API_URL}/${path}`, this.authHearder);
	}

	public getCallWithQuery(path: string, http: HttpClient, query: string) {
		return http.get(`${this.API_URL}/${path}?${query}`, this.authHearder);
	}

	public getCallById(path: string, http: HttpClient, id: number) {
		return http.get(`${this.API_URL}/${path}/${id}`, this.authHearder);
	}

	public postCall(path: string, http: HttpClient, body: any) {
		return http.post(`${this.API_URL}/${path}`, body, this.authHearder);
	}

	public putCall(path: string, http: HttpClient, body: any) {
		return http.put(`${this.API_URL}/${path}`, body, this.authHearder);
	}

	public deleteCall(path: string, http: HttpClient, id: number) {
		return http.delete(`${this.API_URL}/${path}/${id}`, this.authHearder);
	}
}
