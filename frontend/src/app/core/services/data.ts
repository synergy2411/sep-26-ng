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

  delete(id: string) {}
}
