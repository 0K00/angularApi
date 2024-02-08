import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.scss',
})
export class ViewTasksComponent implements OnInit {
  tasks: any;

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    fetch('http://localhost:3000/api/tasks')
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          
          this.tasks = data;
        })
      })
  }

  delete(id: string) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/api/tasks/' + id, { method: 'DELETE' })
        .then((response) => {
          if (response.ok) {
            console.log('ça marche');
          } else {
            reject('ça marche pas');
          }
        })
        .then((data) => {
          return resolve(data);
        });
    });
  }

 
 

}
