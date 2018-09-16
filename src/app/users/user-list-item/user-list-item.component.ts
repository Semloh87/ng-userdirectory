import { UsersDataService } from './../services/users-data.service';
import { User } from './../interfaces/user.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;
  @Input() index: number;
  constructor( private userDS: UsersDataService) {  }

  ngOnInit() {
  }

  async  onDeleteUser() {
    const response = await this.userDS.deleteUser(this.user);
    if (response) {
      console.warn(`User ${this.user.name} has been deleted`);
    }
  }

}
