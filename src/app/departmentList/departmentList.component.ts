import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department';
import { DepartmentAPI } from '../shared/departmentApi';

@Component({
  selector: 'app-department-list',
  templateUrl: './departmentList.component.html',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments() {
    const departmentApi = new DepartmentAPI();
    this.departments = departmentApi.getDepartments(this.http);
  }
}
