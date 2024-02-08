import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
 task : any 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = String(routeParams.get('id'));
    this.getTheTask(taskIdFromRoute)
  }

  getTheTask(taskIdFromRoute :string){
    fetch('http://localhost:3000/api/tasks/'+taskIdFromRoute).then((response) => {
      response.json().then((data) => {
        console.log(data);

        this.task = data;
      });
    });
  }


}