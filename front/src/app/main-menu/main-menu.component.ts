import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  constructor(private router: Router) { }

  showAllTasks(): void {
    this.router.navigate(['/list']);
  }

  showTaskById(): void {
  }

  updateTask(): void {
  }

  addTask(): void {
    this.router.navigate(['/add']);
  }

  deleteTask(): void {
  }

}
