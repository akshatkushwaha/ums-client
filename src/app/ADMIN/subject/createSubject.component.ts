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
	constructor(private http: HttpClient) {}

	ngOnInit() {}
}
