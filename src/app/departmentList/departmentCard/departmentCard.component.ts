import { Component, Input } from '@angular/core';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-department-card',
  templateUrl: './departmentCard.component.html',
})
export class DepartmentCardComponent {
  @Input() department: Department = new Department(0, '', '', 0, '');

  constructor() {}
}
