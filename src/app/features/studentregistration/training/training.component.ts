import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StudentComponent} from '../student/student.component';

@Component({
  selector: 'app-training',
  imports: [CommonModule, FormsModule, StudentComponent],
  templateUrl: './training.component.html',
})

export class TrainingComponent {
  names: string[] = [];
  newName: string = '';

  ngOnInit() {
    if (sessionStorage['names']) this.names = JSON.parse(sessionStorage['names'])
  }

  addName(): void {
    if (!this.newName) return;

    this.names.push(this.newName);
    this.newName = '';

    sessionStorage['names'] = JSON.stringify(this.names);
  }

  removeStudentComponent(studentName: string) {
    let index = this.names.indexOf(studentName);
    this.names.splice(index, 1);

    sessionStorage['names'] = JSON.stringify(this.names);
  }
}
