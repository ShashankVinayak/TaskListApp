import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    addTask(task) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/task', JSON.stringify(task), { headers: headers })
            .map(res => res.json());
    }

    deleteTask(id) {
        return this.http.delete('/api/task/' + id)
            .map(res => res.json());
    }

    getToDoTask() {
        return this.http.get('/api/task/todo')
            .map(res => res.json());
    }

    getCompletedTask() {
        return this.http.get('/api/task/complete')
            .map(res => res.json());
    }

    completedTask(id) {
        return this.http.put('/api/task/complete/' + id, null)
            .map(res => res.json());
    }

    incompleteTask(id){
        return this.http.put('/api/task/incomplete/' + id, null)
            .map(res => res.json());
    }
}