import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Department } from 'src/app/models/department';

import { DepartmentAPI } from 'src/app/shared/departmentApi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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
