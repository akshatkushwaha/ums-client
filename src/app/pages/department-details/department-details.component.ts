import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/department';

import { DepartmentAPI } from 'src/app/shared/departmentApi';
import { API } from 'src/app/shared/api';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  department: Department;
  id: number;

  constructor(private http: HttpClient) {
    this.id = 2;
    this.department = this.getDepartment();
    console.log(this.department);
  }

  getDepartment(): Department {
    // const departmentApi = new DepartmentAPI();
    // return departmentApi.getDepartment(this.http, this.id);
    const api = new API();
    console.log(api.getCallWithId('department', this.http, this.id));

    return this.department;
  }
}
