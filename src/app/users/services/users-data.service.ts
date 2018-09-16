import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { USERS } from '../users.data.js';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  // Subjects are another kind of Observable whereby you can trigger a update to any subscribers.
  // see function this.triggerUsersUpdate()
  // this.users become the 'database' and we can notify all subscribers via Submit
  usersUpdated = new Subject<User[]>();
  users: User[] = USERS;
  constructor() {
    this.triggerUsersUpdate();
  }


  // simple CRUD operations can be added to the service
  // Read
  getUsers() {
    return [...this.users];
  }
  // Create
  addUser(user: User) {
    const id = Date.now(),
    newUser = {...user, id: id};
    this.users.push(newUser);
    console.table(newUser);
    console.table(this.users);
    this.triggerUsersUpdate();
    return newUser;
  }

  // Update - NOT USED IN THIS EXAMPLE BUT EXAMPLE OF HOW IT COULD BE DONE.
  editUser(old, newUser) {
    this.users = this.users.map(user => {
      if (user.id !== old.id) {
        return user;
      } else {
        return {...old, ...newUser};
      }
    });
    this.triggerUsersUpdate();
  }
  // Delete
  deleteUser(user: User) {
    this.users = this.users.filter(u => u.id !== user.id);
    console.table(this.users);
    this.triggerUsersUpdate();
    return true;
  }

  // trigger to notifiy all subscribers of userUpdated using the next() - in a way it is similer to EeentEmitter
  triggerUsersUpdate() {
    this.usersUpdated.next(this.users);
  }

}
