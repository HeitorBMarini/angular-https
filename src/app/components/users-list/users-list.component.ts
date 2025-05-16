// users-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersListResponse } from '../../types/users-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  imports: [CommonModule],
})
export class UsersListComponent {
  @Input({ required: true }) userList: UsersListResponse = [];
  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>()

  userSelectedIndex: number | undefined;

  onUserSelected(userIndex: number) {
    this.userSelectedIndex = userIndex;
    this.onUserSelectedEmitt.emit(userIndex);
  }
}
