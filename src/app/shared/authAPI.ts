import { HttpClient } from '@angular/common/http';

export class AuthAPI {
	private API_URL = 'http://localhost:8080/api/v1/auth';

	// login
	public login(http: HttpClient, authBody: any): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			http.post(`${this.API_URL}/authenticate`, authBody).subscribe({
				next: (response: any) => {
					resolve(response);
				},
				error: (error) => {
					reject(error);
				},
			});
		});
	}

	// register
	public register(http: HttpClient, authBody: any): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			http.post(`${this.API_URL}/register`, authBody).subscribe({
				next: (response: any) => {
					resolve(response);
				},
				error: (error) => {
					reject(error);
				},
			});
		});
	}
}
