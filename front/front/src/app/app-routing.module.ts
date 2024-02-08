import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { vie } from './views/home/home.component';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';



const routes: Routes = [
  {path:"viewTasks",
  component:ViewTasksComponent},
  {
    path:"editTask/:id",
    component:EditTaskComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
