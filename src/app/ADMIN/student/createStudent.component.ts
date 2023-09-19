import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Department } from 'src/app/models/department';
import { Student } from 'src/app/models/student';

import { API } from 'src/app/shared/api';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'create-student',
	templateUrl: './createStudent.component.html',
})
export class CreateStudentComponent implements OnInit {
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private http: HttpClient
	) {}

	ngOnInit() {}
}
