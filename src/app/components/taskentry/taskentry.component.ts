import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'app-task-entry',
    templateUrl: './taskentry.component.html',
    styleUrls: ['./taskentry.component.css'],
    providers: [TaskService]
})
export class TaskEntryComponent {

    @Output() refreshToDo = new EventEmitter();
    taskdetail: string;
    completed: boolean;

    constructor(private taskService: TaskService) { }

    addTask(toDoTask) {
        const task: Task = {
            taskdetail: toDoTask.value,
            completed: false
        };

        toDoTask.value = null;

        this.taskService.addTask(task)
            .subscribe(data => {
                this.refreshToDo.emit();
                console.log(data);
            });
    }
}