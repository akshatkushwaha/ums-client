import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Faculty } from '../models/faculty';

export class FacultyAPI extends API {
  // Get All Faculties
  public getFaculties(http: HttpClient): Promise<Faculty[]> {
    return new Promise<Faculty[]>((resolve, reject) => {
      this.getCall('lecturer', http).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  // Get Faculty by Id
  public getFaculty(http: HttpClient, id: number): Promise<Faculty> {
    return new Promise<Faculty>((resolve, reject) => {
      this.getCallById('lecturer', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create Faculty
  public createFaculty(http: HttpClient, faculty: Faculty): Promise<Faculty> {
    return new Promise<Faculty>((resolve, reject) => {
      this.postCall('lecturer', http, faculty).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Update Faculty
  public updateFaculty(http: HttpClient, faculty: Faculty): Promise<Faculty> {
    return new Promise<Faculty>((resolve, reject) => {
      this.putCall('lecturer', http, faculty).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Delete Faculty
  public deleteFaculty(http: HttpClient, id: number): Promise<Faculty> {
    return new Promise<Faculty>((resolve, reject) => {
      this.deleteCall('lecturer', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
