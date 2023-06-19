import { Component, Input } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-list-component',
  templateUrl: './department-list-component.component.html',
  styleUrls: ['./department-list-component.component.css'],
})
export class DepartmentListComponentComponent {
  @Input() department: Department = new Department(0, '', '', 0, '');

  constructor() {}
}
