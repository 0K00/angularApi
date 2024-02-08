import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  constructor(private taskService: TaskService) {}

  createTask(title: string, description: string): void {
    const task: Task = {title, description, id: 0}; // Création objet "Task" contenant titre + description
    this.taskService.createTask(task).subscribe(
      () => {
        console.log('Tâche créée avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la création de la tâche :', error);
      }
    );
  }
}

