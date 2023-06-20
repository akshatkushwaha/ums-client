import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './studentCard.component.html',
})
export class StudentCardComponent implements OnInit {
  @Input() student: any;

  constructor() {}

  ngOnInit(): void {}
}
