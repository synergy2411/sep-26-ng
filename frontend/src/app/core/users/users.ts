import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfo } from './user-info/user-info';

@Component({
  selector: 'app-users',
  imports: [FormsModule, UserInfo],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    income: 50000,
    dob: new Date('Dec 21, 1965'),
    company: 'Microsoft Inc',
    votes: 120,
  };

  onMoreInfo(user: any) {
    alert(`Mr. ${user.firstName} is working with ${user.company}!`);
  }
}
