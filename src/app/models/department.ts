export class Department {
  id: number;
  name: string;
  abbrieviation: string;
  hodId: number;
  description: string;

  constructor(
    id: number,
    name: string,
    abbrieviation: string,
    hodId: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.abbrieviation = abbrieviation;
    this.hodId = hodId;
    this.description = description;
  }
}
