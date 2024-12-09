import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  author: string = 'Huib';
  age: number = 42


  birthday(): void {
    this.age++
  }
}
