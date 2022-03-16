import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1';

  users = [
    {
      name: 'Ivan 1',
      age: 21
    },
    {
      name: 'Ivan 2',
      age: 21
    },
    {
      name: 'Ivan 3',
      age: 21
    }
  ];

  showText = true;

  buttonClickHandler(): void {
    let title = Number(this.title)
    const current = title++;
    this.users.push({
      name: `Ivan ${current}`,
      age: 20 + current
    })
  };

  toggleText(): void {
    this.showText = !this.showText;
  };

  toggleText2(event: MouseEvent, ...args: number[]): void {
    event.preventDefault();
    this.showText = !this.showText;
    console.log(args);
  };

  changeTitleValue(inputElement: HTMLInputElement) {
    this.title = inputElement.value;
    inputElement.value = '';
  };

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }
}
