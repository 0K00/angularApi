import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './views/tasks/tasks.component';
import { TaskUpdateComponent } from './views/task-update/task-update.component';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/update/:id', component: TaskUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
