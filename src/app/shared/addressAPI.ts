import { HttpClient } from '@angular/common/http';
import { API } from './api';

import { Address } from '../models/address';

export class AddressAPI extends API {
  // Get Address by Id
  public getAddress(http: HttpClient, id: number): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.getCallById('address', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Create Address
  public createAddress(http: HttpClient, address: Address): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.postCall('address', http, address).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Update Address
  public updateAddress(http: HttpClient, address: Address): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.putCall('address', http, address).subscribe((response: any) => {
        resolve(response);
      });
    });
  }

  //   Delete Address
  public deleteAddress(http: HttpClient, id: number): Promise<Address> {
    return new Promise<Address>((resolve, reject) => {
      this.deleteCall('address', http, id).subscribe((response: any) => {
        resolve(response);
      });
    });
  }
}
