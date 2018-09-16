import { UsersDataService } from './../services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userDS: UsersDataService,
    private router: Router
    ) { }

  ngOnInit() {
  this.initForm();
  }

  initForm() {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      job_title: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.addUserForm.valid) {
      const response = await this.userDS.addUser(this.addUserForm.value);
      if (response) {
        this.addUserForm.reset();
        this.router.navigate(['users']);
      }
    }
  }

}
