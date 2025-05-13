import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_LIST } from '../mocks/user.mock';
import { UsersListResponse } from '../types/users-list';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly usersList = USERS_LIST;

  getUsers(): Observable<UsersListResponse> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.usersList); 
        observer.complete();
      }, 500);
    });
  }
}
