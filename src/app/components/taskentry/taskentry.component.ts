import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-task-entry',
    templateUrl: './taskentry.component.html',
    styleUrls: ['./taskentry.component.css'],
    providers: [TaskService]
})
export class TaskEntryComponent {

    task: Task;
    taskdetail: string;
    completed: boolean;

    constructor(private taskService: TaskService) { }

    addTask(event) {
        this.task = {
            taskdetail: event.target.value,
            completed: false
        };

        this.taskService.addTask(this.task)
            .subscribe(data => console.log(data));
    }
}