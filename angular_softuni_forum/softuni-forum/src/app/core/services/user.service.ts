import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { isUndefined } from 'util';
import { IUser } from './../interfaces';
import { StorageService } from './../services/storage.service';

export interface CreateUserDto { username: string, email: string, password: string, phone?: string }

@Injectable()
export class UserService {

  currentUser!: IUser

  // get isLogged() {
  //   return !!this.currentUser
  // }= authService

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // this.isLogged = this.storage.getItem('isLogged');
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(user => this.currentUser = user))
  }
}