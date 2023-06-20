import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { DepartmentAPI } from '../shared/departmentApi';

@Component({
  selector: 'app-department-details',
  templateUrl: './departmentDetails.component.html',
})
export class DepartmentDetailsComponent implements OnInit {
  constructor(http: HttpClient) {}

  ngOnInit(): void {}

  getDepartmentDetails() {}
}
