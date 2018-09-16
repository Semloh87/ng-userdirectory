import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[];

  filter = {
    filters: ['all', 'admin', 'member', 'customer'],
    current: 'all'
  };

  constructor(
    private userDS: UsersDataService
  ) {
    this.userDS.usersUpdated.subscribe(users => {
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
}
