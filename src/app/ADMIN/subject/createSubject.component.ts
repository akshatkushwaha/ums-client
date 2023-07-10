import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Subject } from 'src/app/models/subject';

import { DepartmentAPI } from 'src/app/shared/departmentApi';
import { SubjectAPI } from 'src/app/shared/subjectAPI';

@Component({
	selector: 'create-subject',
	templateUrl: './createSubject.component.html',
})
export class CreateSubjectComponent implements OnInit {
	public title: string = 'Create Subject';
	public subject: Subject;
	public departments: Department[];
	private departmentApi = new DepartmentAPI();
	private subjectApi = new SubjectAPI();

	constructor(private http: HttpClient) {
		this.subject = new Subject(0, '', 0, '', 0, '');
	}

	ngOnInit() {
		this.getDepartments();
	}

	async getDepartments() {
		await this.departmentApi.getDepartments(this.http).then((response) => {
			this.departments = response;
		});
	}

	async createSubject() {
		await this.subjectApi
			.createSubject(this.http, this.subject)
			.then((response) => {
				this.subject = response;
			});

		if (this.subject.id > 0) {
			alert('Subject Created Successfully');
		} else {
			alert('Error Creating Subject');
		}
	}
}
