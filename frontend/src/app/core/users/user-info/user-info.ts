import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  imports: [FormsModule],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
})
export class UserInfo {
  @Input() user: any;

  @Output() childEvent = new EventEmitter();

  onClick() {
    this.childEvent.emit(this.user);
  }
}
