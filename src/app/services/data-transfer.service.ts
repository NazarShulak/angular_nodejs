import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {UserInterface} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  state = new BehaviorSubject<any>('-');

  constructor() {
  }
}
