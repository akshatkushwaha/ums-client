import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Department } from 'src/app/models/department';

export class DepartmentAPI extends API {
  public getDepartments(http: HttpClient): Promise<Department[]> {
    return new Promise<Department[]>((resolve, reject) => {
      this.getCall('department', http).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  public getDepartment(http: HttpClient, id: number): Promise<Department> {
    return new Promise<Department>((resolve, reject) => {
      this.getCallById('department', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
