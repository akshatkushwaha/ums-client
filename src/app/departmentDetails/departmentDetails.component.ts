import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { DepartmentAPI } from '../shared/departmentApi';
import { Department } from '../models/department';
import { Faculty } from '../models/faculty';
import { FacultyAPI } from '../shared/facultyAPI';

@Component({
  selector: 'app-department-details',
  templateUrl: './departmentDetails.component.html',
})
export class DepartmentDetailsComponent implements OnInit {
  private id: number;
  department: Department;
  hod: Faculty;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDepartment();
  }

  async getDepartment() {
    const departmentAPI = new DepartmentAPI();
    await departmentAPI
      .getDepartment(this.http, this.id)
      .then((response: Department) => {
        this.department = response;
      });

    this.getHOD();
  }

  async getHOD() {
    const facultyAPI = new FacultyAPI();
    await facultyAPI
      .getFaculty(this.http, this.department.hodId)
      .then((response: Faculty) => {
        this.hod = response;
      });
  }

  async getFaculty() {}
}
