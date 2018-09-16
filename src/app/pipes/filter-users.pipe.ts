import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: any, role: string): any {

    if (!users) {
      return [];
    }
    if (!role || role === 'all') {
      return users;
    }
    return users.filter(user => user.role === role);
  }

}
