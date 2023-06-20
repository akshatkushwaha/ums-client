export class Department {
  id: number;
  name: string;
  abbreviation: string;
  hodId: number;
  description: string;
  imageURL: string;

  constructor(
    id?: number,
    name?: string,
    abbreviation?: string,
    hodId?: number,
    description?: string,
    imageURL?: string
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.abbreviation = abbreviation || '';
    this.hodId = hodId || 0;
    this.description = description || '';
    this.imageURL = imageURL || '';
  }
}
