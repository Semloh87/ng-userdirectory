import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserListItemComponent } from './users/user-list-item/user-list-item.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterUsersPipe } from './pipes/filter-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    UserListItemComponent,
    UserListComponent,
    CapitalizePipe,
    FilterUsersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
