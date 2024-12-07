import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NgFor, FormsModule],
})
export class AppComponent implements OnInit {
  title = 'fc-todo-front';
  tasks: any[] = [];
  users: any[] = [];

  selectedUser: { [taskId: number]: number } = {};

  newTask = {
    name: '',
    description: '',
    estimate: null,
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadTasks();
    this.loadUsers();
  }

  loadTasks() {
    this.apiService.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  loadUsers() {
    this.apiService.getAllUsers().subscribe((data) => {
      // this.users = data;
      this.users = data.filter((user) => user.role === 'DEVELOPER');
    });
  }

  assignUser(taskId: number, userId: number) {
    this.apiService.addUserToTask(taskId, userId).subscribe(() => {
      console.log(`User ${userId} assigned to task ${taskId}`);
      this.loadTasks(); // Оновити список тасок
    });
  }

  unassignUser(taskId: number, userId: number) {
    this.apiService.removeUserFromTask(taskId, userId).subscribe(() => {
      console.log(`User ${userId} removed from task ${taskId}`);
      this.loadTasks(); // Оновити список тасок
    });
  }

  changeTaskStatus(taskId: number, status: 'PENDING' | 'IN_PROGRESS' | 'SOLVED') {
    this.apiService.updateTaskStatus(taskId, status).subscribe(() => {
      console.log(`Task ${taskId} status updated to ${status}`);
      this.loadTasks(); // Оновити список тасок
    });
  }

  createTask() {
    if (!this.newTask.name || !this.newTask.estimate) {
      console.error('Task Name and Estimate are required');
      return;
    }

    this.apiService
      .createTask(this.newTask.name, this.newTask.description, this.newTask.estimate)
      .subscribe(() => {
        console.log('Task created successfully');
        this.newTask = { name: '', description: '', estimate: null }; // Очистити форму
        this.loadTasks(); // Оновити список тасок
      });
  }

  deleteTask(taskId: number) {
    this.apiService.deleteTask(taskId).subscribe(() => {
      console.log(`Task ${taskId} deleted`);
      this.loadTasks(); // Оновити список тасок
    });
  }

  isUserAssigned(task: any, user: any): boolean {
    return task.assignments.some((assignment: any) => assignment.user.id === user.id);
  }


}
