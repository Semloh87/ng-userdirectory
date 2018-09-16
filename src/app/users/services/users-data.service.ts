import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { USERS } from '../users.data.js';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  usersUpdated = new Subject<User[]>();
  users: User[] = USERS;
  constructor() {
    this.triggerUsersUpdate();
  }

  getUsers() {
    return [...this.users];
  }

  addUser(user: User) {
    const id = Date.now(),
    newUser = {...user, id: id};
    this.users.push(newUser);
    console.table(newUser);
    console.table(this.users);
    this.triggerUsersUpdate();
    return newUser;
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    console.table(this.users);
    this.triggerUsersUpdate();
    return true;
  }

  triggerUsersUpdate() {
    this.usersUpdated.next(this.users);
  }

}
