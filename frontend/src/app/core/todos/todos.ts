import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/todo';
import { Data } from '../services/data';
import { TodoForm } from './todo-form/todo-form';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule, TodoForm, TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  service = inject(Data);

  todoCollection!: Array<Todo>;

  ngOnInit(): void {
    this.service.fetchAll().subscribe((todoCollection) => (this.todoCollection = todoCollection));
  }

  onDelete(todoId: string) {
    this.service.delete(todoId).subscribe(() => {
      const position = this.todoCollection.findIndex((todo) => todo.id === todoId);
      this.todoCollection.splice(position, 1);
    });
  }

  onAdd(todo: { label: string; status: string }) {
    this.service.create(todo).subscribe((createdTodo) => {
      this.todoCollection = [createdTodo, ...this.todoCollection];
    });
  }
}
