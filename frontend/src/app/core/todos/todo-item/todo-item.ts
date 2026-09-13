import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../model/todo';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo!: Todo;

  @Output() deleteTodoEvent = new EventEmitter<string>();

  onDelete(todoId: string) {
    this.deleteTodoEvent.emit(todoId);
  }
}
