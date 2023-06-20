import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-card',
  templateUrl: './facultyCard.component.html',
})
export class StudentCardComponent implements OnInit {
  @Input() student: any;

  constructor() {}

  ngOnInit(): void {}
}
