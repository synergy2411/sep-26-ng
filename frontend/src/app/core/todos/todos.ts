import { Component, inject, OnInit } from '@angular/core';
import { Data } from '../services/data';
import { Todo } from '../../model/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit {
  service = inject(Data);

  todoCollection!: Array<Todo>;

  ngOnInit(): void {
    this.service.fetchAll().subscribe((todoCollection) => (this.todoCollection = todoCollection));
  }
}
