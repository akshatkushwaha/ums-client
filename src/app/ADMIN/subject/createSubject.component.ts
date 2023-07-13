import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Subject } from 'src/app/models/subject';

import { API } from 'src/app/shared/api';

@Component({
	selector: 'create-subject',
	templateUrl: './createSubject.component.html',
})
export class CreateSubjectComponent implements OnInit {
	public title: string = 'Create Subject';
	public subject: Subject;
	public departments: Department[];

	constructor(private http: HttpClient, private api: API) {
		this.subject = new Subject(0, '', 0, '', 0, '');
	}

	ngOnInit() {
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
	}

	async createSubject() {
		// await this.subjectApi
		// 	.createSubject(this.http, this.subject)
		// 	.then((response) => {
		// 		this.subject = response;
		// 	});

		await this.api
			.postCall('subject', this.http, this.subject)
			.then((response) => {
				this.subject = response;
			})
			.catch((error) => {
				console.log(error);
			});

		if (this.subject.id > 0) {
			alert('Subject Created Successfully');
		} else {
			alert('Error Creating Subject');
		}
	}
}
