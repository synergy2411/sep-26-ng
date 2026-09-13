import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  inputLabel = '';

  @Output() addTodoEvent = new EventEmitter<{ label: string; status: string }>();
  onAdd() {
    if (this.inputLabel.trim() === '') {
      return;
    }
    const newTodo = {
      label: this.inputLabel,
      status: 'pending',
    };

    this.addTodoEvent.emit(newTodo);
    this.inputLabel = '';
  }
}
