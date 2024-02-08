import { Injectable } from '@angular/core';

export interface ITask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiBaseUrl = 'http://localhost:3000/api/tasks';

  constructor() { }

  // GET task
  getOne(id: number) {
    return new Promise((resolve, reject) => {
      fetch(this.apiBaseUrl + "/" + id)
        .then(response => {
          if (!response.ok) {
            throw new Error('Impossible de récupérer la tâche');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // GET tasks
  getAll() {
    return new Promise((resolve, reject) => {
      fetch(this.apiBaseUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Impossible de récupérer les tâches');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch (error => {
          reject(error);
        });
    });
  }

  // POST task
  add() {
    return new Promise((resolve, reject) => {
      fetch(this.apiBaseUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: 'task_name', description: 'task_description'}) 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Impossible d'ajouter la tâche");
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch (error => {
        reject(error);
      });
    });
  }

  // PUT task
  update(id: string) {
    return new Promise((resolve, reject) => {
      fetch(this.apiBaseUrl + "/" + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: 'task_name_update', description: 'task_description_update'})
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Impossible de modifier la tâche");
        }
      })
      .catch (error => {
        reject(error);
      });
    });
  }

  // DELETE task
  delete(id: string) {
    return new Promise((resolve, reject) => {
      fetch(this.apiBaseUrl + "/" + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Impossible de supprimer la tâche");
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch (error => {
        reject(error);
      });
    });
  }
}
