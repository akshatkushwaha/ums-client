import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Faculty } from 'src/app/models/faculty';

import { API } from 'src/app/shared/api';

@Component({
	selector: 'app-department-card',
	templateUrl: './departmentCard.component.html',
})
export class DepartmentCardComponent implements OnInit {
	@Input() department: Department;
	hod: Faculty;
	api = new API();

	constructor(private http: HttpClient) {
		this.hod = new Faculty(
			0,
			'',
			'',
			'',
			'',
			'',
			'',
			0,
			new Date(),
			0,
			'',
			0
		);
	}

	ngOnInit() {
		this.getHOD();
	}

	async getHOD() {
		await this.api
			.getCallById('lecturer', this.http, this.department.hodId)
			.then((response) => {
				this.hod = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}
