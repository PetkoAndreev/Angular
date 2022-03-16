import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  // With "!" we say that we ensure that this element  will render
  @Input() user!: IUser
  // Same as above - @Input user: IUser | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
