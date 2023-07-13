import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department';
import { Faculty } from '../models/faculty';
import { Student } from '../models/student';
import { Subject } from '../models/subject';

import { API } from '../shared/api';

@Component({
	selector: 'app-department-details',
	templateUrl: './departmentDetails.component.html',
})
export class DepartmentDetailsComponent implements OnInit {
	private id: number;
	public department: Department;
	public hod: Faculty;
	public students: Student[] = [];
	public activeTab: string = 'students';

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
		private api: API
	) {
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
		this.department = new Department(0, '', '', 0, '', 0);
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id'];
		this.getDepartment();
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

		this.getHOD();
		this.getStudents();
	}

	async getHOD() {
		await this.api
			.getCallById('faculty', this.http, this.department.hodId)
			.then((response: Faculty) => {
				this.hod = response;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async getFacultys() {}

	async getStudents() {
		await this.api
			.getCallById('students', this.http, this.id)
			.then((response: Student[]) => {
				this.students = response;
			})
			.catch((error) => {
				console.log(error);
			});

		this.students.sort((a, b) => a.firstName.localeCompare(b.firstName));
	}

	async getSubjects() {}

	changeTab(tab: string) {
		this.activeTab = tab;

		if (tab === 'students') {
			this.getStudents();
		} else if (tab === 'subjects') {
			this.getSubjects();
		} else if (tab === 'faculty') {
			this.getFacultys();
		}
	}
}
