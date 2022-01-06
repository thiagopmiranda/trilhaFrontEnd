import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  // ter um objeto para representar os dados inseridos na tela
  request: RequestCreate = {
    name: '',
    job: '',
  };

  response!: ResponseCreate;

  // chamar o service
  constructor(private userService: UserService) {}

  ngOnInit() {}

  save() {
    this.userService
      .createUser(this.request)
      .subscribe((res) => (this.response = res));
  }
}
