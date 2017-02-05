import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

import { AppComponent } from './app.component';
import { TaskCompleteComponent } from './components/taskcomplete/taskcomplete.component';
import { TaskEntryComponent } from './components/taskentry/taskentry.component';
import { TaskToDoComponent } from './components/tasktodo/tasktodo.component';

import { TaskService } from './services/task.service';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    HttpModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
