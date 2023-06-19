export class Department {
  id: number;
  name: string;
  abbreviation: string;
  hodId: number;
  description: string;

  constructor(
    id: number,
    name: string,
    abbreviation: string,
    hodId: number,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.abbreviation = abbreviation;
    this.hodId = hodId;
    this.description = description;
  }
}
