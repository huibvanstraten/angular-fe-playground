import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  points = 0;

  @Input()
  Name: string = '';

  @Output()
  RemoveStudent = new EventEmitter<string>();

  score() { this.points++; }

  deleteStudent() {
    this.RemoveStudent.emit(this.Name);
  }
}
