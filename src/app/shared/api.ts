import { HttpClient } from '@angular/common/http';

export class API {
  private API_URL = 'http://localhost:8080/api/v1';

  public getCall(path: string, http: HttpClient) {
    return http.get(`${this.API_URL}/${path}`);
  }

  public getCallWithQuery(path: string, http: HttpClient, query: string) {
    return http.get(`${this.API_URL}/${path}?${query}`);
  }

  public getCallById(path: string, http: HttpClient, id: number) {
    return http.get(`${this.API_URL}/${path}/${id}`);
  }
}
