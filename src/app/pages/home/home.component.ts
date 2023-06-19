import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Department } from 'src/app/models/department';

import { DepartmentAPI } from 'src/app/shared/departmentApi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  departments: Department[];

  constructor(private http: HttpClient) {
    this.departments = this.getDepartments();
    console.log(this.departments);
  }

  getDepartments(): Department[] {
    const departmentApi = new DepartmentAPI();
    return departmentApi.getDepartments(this.http);
  }
}
