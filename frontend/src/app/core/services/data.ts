import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../../model/todo';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private baseURL = 'http://localhost:3000';

  private httpClient = inject(HttpClient);

  fetchAll() {
    return this.httpClient.get<Todo[]>(`${this.baseURL}/todos`);
  }

  delete(todoId: string) {
    return this.httpClient.delete(`${this.baseURL}/todos/${todoId}`);
  }

  create(todo: { label: string; status: string }) {
    return this.httpClient.post<Todo>(`${this.baseURL}/todos`, todo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
