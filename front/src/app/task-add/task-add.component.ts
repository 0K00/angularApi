import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {
  newTask: Partial<Task> = {
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService) { }

  addTask(): void {
    this.taskService.createTask(this.newTask as Task)
      .subscribe((task: Task) => {
        console.log('Task added:', task);
        // Optionally, you can redirect to another page or show a success message
      }, (error) => {
        console.error('Error adding task:', error);
        // Handle error (e.g., show error message)
      });
  }
}
