import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-task-todo',
    templateUrl: './tasktodo.component.html',
    styleUrls: ['./tasktodo.component.css']
})
export class TaskToDoComponent {

    @Input() tasks: Task[];
    @Output() taskComplete = new EventEmitter();

    constructor(private taskService: TaskService) { }

    deleteTask(id) {
        this.taskService.deleteTask(id).subscribe(data => {
            console.log(data);
        });

        this.getToDoTask();
    }

    getToDoTask() {
        this.taskService.getToDoTask().subscribe(data => {
            this.tasks = data;
            console.log(data);
        });
    }

    completeTask(id) {
        this.taskService.completedTask(id).subscribe(data => {
            this.taskComplete.emit();
            console.log(data);
        });

        this.getToDoTask();
    }
}