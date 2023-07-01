import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './studentCard.component.html',
})
export class StudentCardComponent implements OnInit {
  @Input() student: Student;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
