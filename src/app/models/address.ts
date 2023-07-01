export class Address {
  constructor(
    public id: number,
    public houseNo: string,
    public street: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: string
  ) {}
}
