import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
// import { isUndefined } from 'util';
import { IUser } from './interfaces';
import { StorageService } from './storage.service';

export interface CreateUserDto { username: string, email: string, password: string, phone?: string }

@Injectable()
export class UserService {

  currentUser!: IUser

  get isLogged() {
    return !!this.currentUser
  }

  constructor(private storage: StorageService, private httpClient: HttpClient) {
    // this.isLogged = this.storage.getItem('isLogged');
  }

  getProfile$(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(user => this.currentUser = user))
  }

  login$(userData: { username: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        tap(response => console.log(response)),
        map((response: { body: any; }) => response.body),
        tap(user => this.currentUser = user)
      )
    // this was before the workshop for forms
    // this.isLogged = true;
    // this.storage.setItem('isLogged', true);
  }

  logout(): void {
    // this.isLogged = false;
    // this.storage.setItem('isLogged', false);
  }

  register$(userData: CreateUserDto
  ): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
  }
}