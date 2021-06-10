import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {UserInterface} from "../../models/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: UserInterface;

  constructor(private dataTransfer: DataTransferService) {

  }

  ngOnInit(): void {
    this.dataTransfer.state.subscribe(value => this.user = value );
  }

}
