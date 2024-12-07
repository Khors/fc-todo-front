import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private readonly API_URL = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.API_URL}/tasks`);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${this.API_URL}/users`);
    }

    addUserToTask(taskId: number, userId: number): Observable<Task> {
        return this.http.post<Task>(`${this.API_URL}/tasks/${taskId}/assign/${userId}`, {});
    }

    removeUserFromTask(taskId: number, userId: number): Observable<Task> {
        return this.http.delete<Task>(`${this.API_URL}/tasks/${taskId}/assign/${userId}`);
    }

    updateTaskStatus(taskId: number, status: 'PENDING' | 'IN_PROGRESS' | 'SOLVED'): Observable<Task> {
        return this.http.patch<Task>(`${this.API_URL}/tasks/${taskId}/status`, { status });
    }

    createTask(name: string, description: string, estimate: number): Observable<Task> {
        return this.http.post<Task>(`${this.API_URL}/tasks`, { name, description, estimate });
    }

    deleteTask(taskId: number): Observable<any> {
        return this.http.delete(`${this.API_URL}/tasks/${taskId}`);
    }
}

export interface Task {
    id: number;
    name: string;
    description: string;
    estimate: number;
    status: 'PENDING' | 'IN_PROGRESS' | 'SOLVED';
    assignments?: User[];
}

export interface User {
    id: number;
    name: string;
    role: 'MANAGER' | 'DEVELOPER';
}
