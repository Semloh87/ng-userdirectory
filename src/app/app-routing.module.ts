import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent, children: [
    { path: 'add-user', component: AddUserComponent },
    { path: 'users', component: UserListComponent },
    { path: '', redirectTo: 'users', pathMatch: 'full'},
    { path: '**', redirectTo: 'users'}
  ]},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
