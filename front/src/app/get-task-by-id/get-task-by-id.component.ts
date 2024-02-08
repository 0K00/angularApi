import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-get-task-by-id',
  templateUrl: './get-task-by-id.component.html',
  styleUrls: ['./get-task-by-id.component.scss']
})
export class GetTaskByIdComponent {
  taskId: number = 0; // Or any other default value
  task: Task | undefined;

  constructor(private taskService: TaskService) { }

  getTaskById(): void {
    if (!this.taskId) {
      alert('Please enter a task ID.');
      return;
    }

    this.taskService.getTaskById(this.taskId)
      .subscribe((task: Task) => {
        this.task = task;
      }, (error) => {
        console.error('Error fetching task:', error);
        // Handle error (e.g., show error message)
      });
  }
}
