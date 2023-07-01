import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Student } from '../models/student';

export class StudentAPI extends API {
  // Get All Students
  public getStudents(http: HttpClient): Promise<Student[]> {
    return new Promise<Student[]>((resolve, reject) => {
      this.getCall('student', http).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get Student by Id
  public getStudent(http: HttpClient, id: number): Promise<Student> {
    return new Promise<Student>((resolve, reject) => {
      this.getCallById('student', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get All Students by Department Id
  public getStudentsByDepartment(
    http: HttpClient,
    departmentId: number
  ): Promise<Student[]> {
    return new Promise<Student[]>((resolve, reject) => {
      this.getCallWithQuery(
        'student',
        http,
        `departmentId=${departmentId}`
      ).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Get All Students by Subject Id
  public getStudentsBySubject(
    http: HttpClient,
    subjectId: number
  ): Promise<Student[]> {
    return new Promise<Student[]>((resolve, reject) => {
      this.getCallWithQuery(
        'student',
        http,
        `subjectId=${subjectId}`
      ).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create Student
  public createStudent(http: HttpClient, student: Student): Promise<Student> {
    return new Promise<Student>((resolve, reject) => {
      this.postCall('student', http, student).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Update Student
  public updateStudent(http: HttpClient, student: Student): Promise<Student> {
    return new Promise<Student>((resolve, reject) => {
      this.putCall('student', http, student).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Delete Student
  public deleteStudent(http: HttpClient, id: number): Promise<Student> {
    return new Promise<Student>((resolve, reject) => {
      this.deleteCall('student', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
