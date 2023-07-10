import { Component, OnInit } from '@angular/core';

import { Department } from '../../models/department';
import { Faculty } from '../../models/faculty';

import { DepartmentAPI } from 'src/app/shared/departmentApi';
import { FacultyAPI } from 'src/app/shared/facultyAPI';
import { FileAPI } from 'src/app/shared/fileAPI';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-department',
	templateUrl: './createDepartment.component.html',
})
export class CreateDepartmentComponent implements OnInit {
	title = 'Department';
	private id: number;
	private departmentAPI: DepartmentAPI = new DepartmentAPI();
	private facultyAPI: FacultyAPI = new FacultyAPI();
	private fileAPI: FileAPI = new FileAPI();
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
		this.department = new Department(0, '', '', 0, '', 0);
		this.image = new File([], '');
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
		if (this.id != null) {
			this.activeButtonAction = 'update';
			this.getDepartment();
		}
		this.getHODs();
	}

	async getDepartment() {
		await this.departmentAPI
			.getDepartment(this.http, this.id)
			.then((response: Department) => {
				this.department = response;
			});

		if (this.department.imageId != null) {
			await this.fileAPI
				.getFile(this.http, this.department.imageId)
				.then((response: File) => {
					this.image = response;
				});
		}
	}

	async getHODs() {
		await this.facultyAPI.getFaculties(this.http).then((response: any) => {
			this.hods = response;
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
		await this.fileAPI
			.createFile(this.http, formData)
			.then((response: any) => {
				this.department.imageId = response.id;
			});

		await this.departmentAPI
			.createDepartment(this.http, this.department)
			.then((response: any) => {
				console.log(response);
			});

		alert('Department Created Successfully');
		this.buttonActive = true;
	}

	async updateDepartment() {
		this.buttonActive = false;
		let formData = new FormData();
		formData.append('file', this.image);
		if (this.image != null) {
			await this.fileAPI
				.createFile(this.http, formData)
				.then((response: any) => {
					this.department.imageId = response.id;
				});
		}
		await this.departmentAPI
			.updateDepartment(this.http, this.department)
			.then((response: any) => {
				console.log(response);
			});

		alert('Department Updated Successfully');
		this.buttonActive = true;
	}

	async deleteDepartment() {
		await this.departmentAPI
			.deleteDepartment(this.http, this.department.id)
			.then((response: any) => {
				console.log(response);
			});

		alert('Department Deleted Successfully');
		this.router.navigate(['/admin/departments']);
	}
}
