import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DepartmentAPI } from '../shared/departmentApi';
import { Department } from '../models/department';

@Component({
	selector: 'app-department-list',
	templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent implements OnInit {
	departments: Department[];
	departmentApi = new DepartmentAPI();

	constructor(private http: HttpClient) {
		this.departments = [];
	}

	ngOnInit(): void {
		this.getDepartments();
	}

	async getDepartments() {
		await this.departmentApi
			.getDepartments(this.http)
			.then((response: Department[]) => {
				this.departments = response;
			});
		this.departments.sort((a, b) => a.name.localeCompare(b.name));
	}
}
