import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../model/todo';
import { Data } from '../services/data';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  service = inject(Data);

  todoCollection!: Array<Todo>;

  inputLabel = '';

  ngOnInit(): void {
    this.service.fetchAll().subscribe((todoCollection) => (this.todoCollection = todoCollection));
  }

  onDelete(todoId: string) {
    this.service.delete(todoId).subscribe(() => {
      const position = this.todoCollection.findIndex((todo) => todo.id === todoId);
      this.todoCollection.splice(position, 1);
    });
  }

  onAdd() {
    if (this.inputLabel.trim() === '') {
      return;
    }

    const newTodo = {
      label: this.inputLabel,
      status: 'pending',
    };
    this.service.create(newTodo).subscribe((createdTodo) => {
      this.todoCollection = [createdTodo, ...this.todoCollection];
    });
    this.inputLabel = '';
  }
}
