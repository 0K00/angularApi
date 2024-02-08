import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  taskId: number = 0; // Initialisez taskId avec une valeur par défaut
  taskTitle: string = ''; // Initialisez les propriétés taskTitle et taskDescription
  taskDescription: string = ''; // pour éviter les erreurs de type null

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.taskId = +params.get('id')!;
      this.getTask(this.taskId);
    });
  }

  getTask(id: number): void {
    this.taskService.getTasks(this.taskId).subscribe(
      (task: any) => { // Ajoutez le type de retour de la fonction de callback
        this.taskTitle = task.title;
        this.taskDescription = task.description;
      },
      (error: any) => { // Ajoutez le type de retour de la fonction de callback
        console.error('Erreur lors de la récupération de la tâche :', error);
        // Ajoutez ici toute logique de gestion des erreurs
      }
    );
  }

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.taskTitle, this.taskDescription).subscribe(
      () => {
        console.log('Tâche mise à jour avec succès !');
        // Ajoutez ici toute autre logique nécessaire après la mise à jour de la tâche
      },
      (error: any) => { // Ajoutez le type de retour de la fonction de callback
        console.error('Erreur lors de la mise à jour de la tâche :', error);
        // Ajoutez ici toute logique de gestion des erreurs
      }
    );
  }
}

