import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Department } from 'src/app/models/department';

export class DepartmentAPI extends API {
  public getDepartments(http: HttpClient): Department[] {
    let departments: Department[] = [];

    this.getCall('department', http).subscribe((response: any) => {
      response.forEach((element: Department) => {
        departments.push(element);
      });
    });

    return departments;
  }
}
