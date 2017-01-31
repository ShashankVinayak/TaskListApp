import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskCompleteComponent } from './components/taskcomplete/taskcomplete.component';
import { TaskEntryComponent } from './components/taskentry/taskentry.component';
import { TaskToDoComponent } from './components/tasktodo/tasktodo.component';

import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskCompleteComponent,
    TaskEntryComponent,
    TaskToDoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
