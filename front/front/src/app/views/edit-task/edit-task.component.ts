import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  task: any;

  // on injecte activatedroute dans le constructeur afin de récupérer les infos relatives à la route
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // on récupère les infos de la route -> on récupère l'id, on passe l'id en paramètre de le fonction qui retourneune tâche
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = String(routeParams.get('id'));
    this.getTheTask(taskIdFromRoute);
  }

  // fonction qui récupère une tâche
  getTheTask(taskIdFromRoute: string) {
    fetch('http://localhost:3000/api/tasks/' + taskIdFromRoute).then(
      (response) => {
        response.json().then((data) => {
          console.log(data);

          this.task = data;
        });
      }
    );
  }

  // fonction qui update une tache ( en cours de test) faire en sorte que task.completed soit boolean
  update(id: string) {
    fetch('http://localhost:3000/api/tasks/' + id, { 
      method: 'PUT',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title:this.task.title,description:this.task.description/*,completed:this.task.completed*/})
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  }
  /*
  fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Task',
          description: 'Description of the new task',
        }),
      })
  
  
  */
}
