import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department';
import { API } from '../shared/api';

@Component({
	selector: 'app-department-list',
	templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent implements OnInit {
	departments: Department[];
	api = new API();

	constructor(private http: HttpClient) {
		this.departments = [];
	}

	ngOnInit(): void {
		this.getDepartments();
	}

	async getDepartments() {
		await this.api
			.getCall('department', this.http)
			.then((response) => {
				this.departments = response;
			})
			.catch((error) => {
				console.log(error);
			});
		this.departments.sort((a, b) => a.name.localeCompare(b.name));
	}
}
