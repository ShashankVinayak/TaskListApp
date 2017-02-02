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

    getAllTask() {
        return this.http.get('/api/task')
            .map(res => res.json());
    }
}