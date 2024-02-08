import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrl: './task-update.component.scss'
})
export class TaskUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  public task: ITask = {} as ITask;

  taskForm = {
    name: "",
    description: "",
    completed: ""
  };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskService.getOne(params['id'])
        .then(data => {
          this.task = data as ITask;
        })
    });
  }
}
