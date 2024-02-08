import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateTaskComponent } from './views/create-task/create-task.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';
import { DeleteTaskComponent } from './views/delete-task/delete-task.component';
import { ViewTasksComponent } from './views/view-tasks/view-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateTaskComponent,
    EditTaskComponent,
    DeleteTaskComponent,
    ViewTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
