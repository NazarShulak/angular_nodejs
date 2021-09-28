import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserInterface} from "../../models/user.interface";
import {UsersService} from "../../services/users.service";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  users: UserInterface[];

  id = new FormControl(0);

  form = new FormGroup({id: this.id})

  constructor(private usersService: UsersService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value)
  }

  update() {
    const user = this.users.find(value => value.id == this.form.value.id)
    if (user) {
      this.dataTransfer.state.next(user);
    }

  }
}
