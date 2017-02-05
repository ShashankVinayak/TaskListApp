import { Component, OnInit } from '@angular/core';

import { Task } from './models/Task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  todoTasks: Task[];
  completedTasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getToDoTask();
    this.getCompletedTask();
  }

  updateToDo() {
    console.log('updateToDo');
    this.getToDoTask();
  }

  getToDoTask() {
    this.taskService.getToDoTask().subscribe(data => {
      this.todoTasks = data;
      console.log(data);
    });
  }

  getCompletedTask() {
    this.taskService.getCompletedTask().subscribe(data => {
      this.completedTasks = data;
      console.log(data);
    });
  }

  updateTaskComplete(){
    console.log('updateComplete');
    this.getCompletedTask();
  }
}
