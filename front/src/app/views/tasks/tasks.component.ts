import { Component, OnInit } from '@angular/core';
import { ITask, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) {}

  public tasks: ITask[] = [];

  deleteTask(id: string) : void {
    this.taskService.delete(id)
      .then(() => {
        this.tasks = this.tasks.filter(task => task.id !== id);
      });   
  }

  ngOnInit(): void {
    this.taskService.getAll()
      .then((data: unknown) => {
        this.tasks = data as ITask[];
      });
  }
}