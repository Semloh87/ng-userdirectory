import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  users: User[];
  // filter object to build front end filter buttons
  filter = {
    filters: ['all', 'admin', 'member', 'customer'],
    current: 'all'
  };

  constructor(
    private userDS: UsersDataService
  ) {
    // subscribe to the Subject of usersUpdated
    this.userSub = this.userDS.usersUpdated.subscribe(users => {
      // set users
      this.users = users;
    });
   }

  ngOnInit() {
    this.users = this.userDS.getUsers();
  }
  filterUsers(filter: string) {
    console.log(filter);
    this.filter.current = filter;
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
