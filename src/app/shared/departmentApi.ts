import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Department } from 'src/app/models/department';

export class DepartmentAPI extends API {
  public getDepartments(http: HttpClient): Department[] {
    let departments: Department[] = [];

    this.getCall('department', http).subscribe((response: any) => {
      response.forEach((element: any) => {
        departments.push(
          new Department(
            element.id,
            element.name,
            element.abbreviation,
            element.hodId,
            element.description
          )
        );
      });
    });

    return departments;
  }

  // public async getDepartment(http: HttpClient, id: number): Department {
  //   let department: Department = new Department(0, '', '', 0, '');

  //   await this.getCallWithId('department', http, id).subscribe(
  //     (response: Department) => {
  //       department = response;
  //     }
  //   );

  //   return department;
  // }

  //   public postDepartment(http: HttpClient, body: any): Department {
  //     return this.postCall('departments', http, body);
  //   }

  //   public putDepartment(http: HttpClient, id: number, body: any): Department {
  //     return this.putCall('departments', http, id, body);
  //   }

  //   public deleteDepartment(http: HttpClient, id: number): Department {
  //     return this.deleteCall('departments', http, id);
  //   }
}
