import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ResponseUsers } from './user.model';

@Component({
  selector: 'users-component;',
  templateUrl: './users.component.html',
  providers: [UserService],
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  responseUsers: ResponseUsers | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((res) => (this.responseUsers = res));
  }
}
