import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Department } from 'src/app/models/department';

export class DepartmentAPI extends API {
  // Get All Departments
  public getDepartments(http: HttpClient): Promise<Department[]> {
    return new Promise<Department[]>((resolve, reject) => {
      this.getCall('department', http).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get Department by Id
  public getDepartment(http: HttpClient, id: number): Promise<Department> {
    return new Promise<Department>((resolve, reject) => {
      this.getCallById('department', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create Department
  public createDepartment(
    http: HttpClient,
    department: Department
  ): Promise<Department> {
    return new Promise<Department>((resolve, reject) => {
      this.postCall('department', http, department).subscribe(
        (response: any) => {
          resolve(response);
        }
      );
    });
  }

  //   Update Department
  public updateDepartment(
    http: HttpClient,
    department: Department
  ): Promise<Department> {
    return new Promise<Department>((resolve, reject) => {
      this.putCall('department', http, department).subscribe(
        (response: any) => {
          resolve(response);
        }
      );
    });
  }

  //   Delete Department
  public deleteDepartment(http: HttpClient, id: number): Promise<Department> {
    return new Promise<Department>((resolve, reject) => {
      this.deleteCall('department', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
