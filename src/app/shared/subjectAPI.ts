import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Subject } from '../models/subject';

export class SubjectAPI extends API {
  // Get All Subjects
  public getSubjects(http: HttpClient): Promise<Subject[]> {
    return new Promise<Subject[]>((resolve, reject) => {
      this.getCall('subject', http).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get Subject by Id
  public getSubject(http: HttpClient, id: number): Promise<Subject> {
    return new Promise<Subject>((resolve, reject) => {
      this.getCallById('subject', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get All Subjects by Department Id
  public getSubjectsByDepartment(
    http: HttpClient,
    departmentId: number
  ): Promise<Subject[]> {
    return new Promise<Subject[]>((resolve, reject) => {
      this.getCallWithQuery(
        'subject',
        http,
        `departmentId=${departmentId}`
      ).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Get All Subjects by Student Id
  public getSubjectsByStudent(
    http: HttpClient,
    studentId: number
  ): Promise<Subject[]> {
    return new Promise<Subject[]>((resolve, reject) => {
      this.getCallWithQuery(
        'subject',
        http,
        `studentId=${studentId}`
      ).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create Subject
  public createSubject(http: HttpClient, subject: Subject): Promise<Subject> {
    return new Promise<Subject>((resolve, reject) => {
      this.postCall('subject', http, subject).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Update Subject
  public updateSubject(http: HttpClient, subject: Subject): Promise<Subject> {
    return new Promise<Subject>((resolve, reject) => {
      this.putCall('subject', http, subject).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Delete Subject
  public deleteSubject(http: HttpClient, id: number): Promise<Subject> {
    return new Promise<Subject>((resolve, reject) => {
      this.deleteCall('subject', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
