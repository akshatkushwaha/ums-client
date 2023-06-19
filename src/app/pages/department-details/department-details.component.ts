import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/department';

import { DepartmentAPI } from 'src/app/shared/departmentApi';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  department: Department;
  id: number;

  constructor(private http: HttpClient) {
    this.id = 2;
  }

  ngOnInit(): void {
    this.getDepartment();
  }

  async getDepartment() {}
}
