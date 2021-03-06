import { Component, Input, Output, EventEmitter } from '@angular/core';

import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-task-complete',
    templateUrl: './taskcomplete.component.html',
    styleUrls: [
        './taskcomplete.component.css',
        '../shared/sharedstyles.css'
    ]
})
export class TaskCompleteComponent {

    @Input() tasks: Task[];
    @Output() taskIncomplete = new EventEmitter();

    constructor(private taskService: TaskService) { }

    getCompletedTask() {
        this.taskService.getCompletedTask().subscribe(data => {
            this.tasks = data;
            console.log(data);
        });
    }

    deleteTask(id) {
        this.taskService.deleteTask(id).subscribe(data => {
            console.log(data);
        });

        this.getCompletedTask();
    }

    incompleteTask(id) {
        this.taskService.incompleteTask(id).subscribe(data => {
            this.taskIncomplete.emit();
            console.log(data);
        });

        this.getCompletedTask();
    }
}