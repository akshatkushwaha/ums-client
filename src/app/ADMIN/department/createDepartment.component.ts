import { Component, OnInit } from '@angular/core';

import { Department } from '../../models/department';
import { Faculty } from '../../models/faculty';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { API } from '../../shared/api';

@Component({
	selector: 'app-department',
	templateUrl: './createDepartment.component.html',
})
export class CreateDepartmentComponent implements OnInit {
	private api = new API();
	private id: number;
	public department: Department;
	public hods: Faculty[] = [];
	public image: File;
	public activeButtonAction: string = 'create';
	public buttonActive: boolean = true;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient
	) {
		this.department = new Department(0, '', '', 0, '', '');
		this.image = new File([], '');
	}

	ngOnInit(): void {
		this.getHODs();
		this.id = this.route.snapshot.params['id'];
		if (this.id != null) {
			this.activeButtonAction = 'update';
			this.getDepartment();
		}
	}

	async getDepartment() {
		await this.api
			.getCallById('department', this.http, this.id)
			.then((response: Department) => {
				this.department = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async getHODs() {
		await this.api
			.getCall('lecturer', this.http)
			.then((response: any) => {
				this.hods = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	onFileSelected(event: any) {
		this.image = event.target.files[0];
		console.log(this.image);
	}

	async createDepartment() {
		this.buttonActive = false;
		let formData = new FormData();
		formData.append('file', this.image);
		// await this.fileAPI
		// 	.createFile(this.http, formData)
		// 	.then((response: any) => {
		// 		this.department.imageId = response.id;
		// 	});

		await this.api
			.postCall('file/upload', this.http, formData)
			.then((response: any) => {
				this.department.imageUrl = response.path;
			});

		await this.api
			.postCall('department', this.http, this.department)
			.then((response: any) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		alert('Department Created Successfully');
		this.buttonActive = true;
	}

	async updateDepartment() {
		this.buttonActive = false;
		let formData = new FormData();
		formData.append('file', this.image);
		if (this.image != null) {
			// await this.fileAPI
			// 	.createFile(this.http, formData)
			// 	.then((response: any) => {
			// 		this.department.imageId = response.id;
			// 	});

			await this.api
				.postCall('file/upload', this.http, formData)
				.then((response: any) => {
					this.department.imageUrl = response.path;
				})
				.catch((error) => {
					console.log(error);
				});
		}

		// await this.departmentAPI
		// 	.updateDepartment(this.http, this.department)
		// 	.then((response: any) => {
		// 		console.log(response);
		// 	});

		await this.api
			.putCall('department', this.http, this.department)
			.then((response: any) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		alert('Department Updated Successfully');
		this.buttonActive = true;
	}

	async deleteDepartment() {
		// await this.departmentAPI
		// 	.deleteDepartment(this.http, this.department.id)
		// 	.then((response: any) => {
		// 		console.log(response);
		// 	});

		await this.api
			.deleteCall('department', this.http, this.department.id)
			.then((response: any) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		alert('Department Deleted Successfully');
		this.router.navigate(['/admin/departments']);
	}
}
