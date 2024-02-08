import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
const routes: Routes = [
  {
    path: "",
    component: MainMenuComponent
  },
  {
    path: "list",
    component: TasksListComponentComponent
  },
  {
    path: "add",
    component: TaskAddComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
