import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { Faculty } from 'src/app/models/faculty';

import { FacultyAPI } from 'src/app/shared/facultyAPI';

@Component({
  selector: 'app-department-card',
  templateUrl: './departmentCard.component.html',
})
export class DepartmentCardComponent implements OnInit {
  @Input() department: Department;
  hod: Faculty;
  facultyApi = new FacultyAPI();

  constructor(private http: HttpClient) {
    this.hod = new Faculty(0, '', '', '', '', '', '', 0, new Date(), 0, '', 0);
  }

  ngOnInit() {
    this.getHOD();
  }

  async getHOD() {
    await this.facultyApi
      .getFaculty(this.http, this.department.hodId)
      .then((response: Faculty) => {
        this.hod = response;
      });
  }
}
