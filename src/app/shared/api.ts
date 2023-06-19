import { HttpClient } from '@angular/common/http';

export class API {
  private API_URL = 'http://localhost:8080/api/v1';

  public getCall(path: string, http: HttpClient) {
    return http.get(`${this.API_URL}/${path}`);
  }

  public getCallWithId(
    path: string,
    http: HttpClient,
    id: number
  ): Promise<any> {
    let response: any;
    http.get(`${this.API_URL}/${path}/${id}`).subscribe((response: any) => {
      response = response;
    });

    console.log(response);

    return response.toPromise();
  }

  //   public postCall(path: string, http: HttpClient, body: any) {
  //     return http.post(`${this.API_URL}/${path}`, body);
  //   }

  //   public putCall(path: string, http: HttpClient, id: number, body: any) {
  //     return http.put(`${this.API_URL}/${path}/${id}`, body);
  //   }

  //   public deleteCall(path: string, http: HttpClient, id: number) {
  //     return http.delete(`${this.API_URL}/${path}/${id}`);
  //   }
}
