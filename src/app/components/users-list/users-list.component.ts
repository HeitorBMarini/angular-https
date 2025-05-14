import { Component, Input } from '@angular/core';
import { UsersListResponse } from '../../types/users-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
   imports: [CommonModule],
})
export class UsersListComponent {
  @Input({ required: true }) userList: UsersListResponse = [];
}
