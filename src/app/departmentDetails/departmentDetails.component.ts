import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Department } from '../models/department';
import { Faculty } from '../models/faculty';
import { Student } from '../models/student';
import { Subject } from '../models/subject';

import { DepartmentAPI } from '../shared/departmentAPI';
import { FacultyAPI } from '../shared/facultyAPI';
import { StudentAPI } from '../shared/studentAPI';
import { SubjectAPI } from '../shared/subjectAPI';

@Component({
  selector: 'app-department-details',
  templateUrl: './departmentDetails.component.html',
})
export class DepartmentDetailsComponent implements OnInit {
  private id: number;
  private departmentAPI: DepartmentAPI = new DepartmentAPI();
  private facultyAPI: FacultyAPI = new FacultyAPI();
  private studentAPI: StudentAPI = new StudentAPI();
  private subjectAPI: SubjectAPI = new SubjectAPI();
  public department: Department;
  public hod: Faculty;
  public students: Student[] = [];
  public activeTab: string = 'students';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.hod = new Faculty(0, '', '', '', '', '', '', 0, new Date(), 0, '', 0);
    this.department = new Department(0, '', '', 0, '', 0);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDepartment();
  }

  async getDepartment() {
    await this.departmentAPI
      .getDepartment(this.http, this.id)
      .then((response: Department) => {
        this.department = response;
      });

    this.getHOD();
    this.getStudents();
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

  async getStudents() {
    await this.studentAPI
      .getStudentsByDepartment(this.http, this.id)
      .then((response: Student[]) => {
        this.students = response;
      });

    this.students.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  async getSubjects() {}

  changeTab(tab: string) {
    this.activeTab = tab;

    if (tab === 'students') {
      this.getStudents();
    } else if (tab === 'subjects') {
      this.getSubjects();
    } else if (tab === 'faculty') {
      this.getFaculty();
    }
  }
}
