import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USERS_LIST } from '../mocks/user.mock';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

    private readonly usersList = USERS_LIST;

  getUsers() {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next([this.usersList]);
      }, 500);
    });
  }
}
