export class Student {
  constructor(
    public id: number,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public email: string,
    public phoneNumber: string,
    public gender: string,
    public addressId: number,
    public dateOfBirth: Date,
    public profilePictureId: number,
    public rollNumber: string,
    public departmentId: number
  ) {}
}
