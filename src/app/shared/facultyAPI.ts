import { Faculty } from '../models/faculty';
import { API } from './api';

import { HttpClient } from '@angular/common/http';

export class FacultyAPI extends API {
  public getFaculties(
    http: HttpClient,
    departmentId: number
  ): Promise<Faculty[]> {
    return new Promise<Faculty[]>((resolve, reject) => {
      this.getCallWithQuery(
        'lecturer',
        http,
        `departmentId=${departmentId}`
      ).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  public getFaculty(http: HttpClient, id: number): Promise<Faculty> {
    return new Promise<Faculty>((resolve, reject) => {
      this.getCallById('lecturer', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
