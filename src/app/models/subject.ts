export class Subject {
  constructor(
    public id: number,
    public name: string,
    public departmentId: number,
    public subjectCode: string,
    public credits: number,
    public description: string
  ) {}
}
