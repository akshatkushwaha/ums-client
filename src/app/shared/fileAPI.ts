import { HttpClient } from '@angular/common/http';
import { API } from './api';

export class FileAPI extends API {
  // Get File by Id
  public getFile(http: HttpClient, id: number): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      this.getCallById('file', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create File
  public createFile(http: HttpClient, file: FormData): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      this.postCall('file', http, file).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Delete File
  public deleteFile(http: HttpClient, id: number): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      this.deleteCall('file', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
