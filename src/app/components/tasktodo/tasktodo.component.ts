import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-task-todo',
    templateUrl: './tasktodo.component.html',
    styleUrls: ['./tasktodo.component.css'],
    providers: [TaskService]
})
export class TaskToDoComponent implements OnInit {

    tasks: Task[];

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.getAllTask();
    }

    getAllTask() {
        this.taskService.getAllTask().subscribe(data => {
            this.tasks = data;
            console.log(data);
        });
    }

    deleteTask(id) {
        this.taskService.deleteTask(id).subscribe(data => {
            console.log(data);
        });
        this.getAllTask();
    }
}