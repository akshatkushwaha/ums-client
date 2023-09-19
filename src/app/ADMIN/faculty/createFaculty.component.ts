import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Department } from 'src/app/models/department';
import { Faculty } from 'src/app/models/faculty';

import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/api';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-create-faculty',
	templateUrl: './createFaculty.component.html',
})
export class CreateFacultyComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
