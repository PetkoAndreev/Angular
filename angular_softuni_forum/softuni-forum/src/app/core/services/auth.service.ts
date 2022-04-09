import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap, map, BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { IRootState, login, logout } from 'src/app/+store';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces';
import { CreateUserDto } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Handle the logic for registration, login and authentication

  // private _currentUser = new BehaviorSubject<IUser>(undefined!);

  // currentUser$ = this._currentUser.asObservable();
  // isLoggedIn$: Observable<boolean> = this.currentUser$.pipe(map(user => !!user))

  // Get current user with ngRX
  currentUser$ = this.store.select(globalState => globalState.currentUser);
  isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  constructor(private httpClient: HttpClient, private store: Store<IRootState>) { }

  login$(userData: { username: string, password: string }): Observable<IUser> {
    return this.httpClient
      .post<IUser>(`${environment.apiUrl}/login`, userData, { withCredentials: true, observe: 'response' })
      .pipe(
        tap(response => console.log(response)),
        map((response: { body: any; }) => response.body),
      )
    // this was before the workshop for forms
    // this.isLogged = true;
    // this.storage.setItem('isLogged', true);
  }

  logout$(): Observable<void> {
    return this.httpClient
      .post<void>(`${environment.apiUrl}/logout`, { withCredentials: true })
    // this was before the workshop for forms
    // this.isLogged = false;
    // this.storage.setItem('isLogged', false);
  }

  register$(userData: CreateUserDto
  ): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
  }

  handleLogin(newUser: IUser) {
    // console.log(newUser)
    // this._currentUser.next(newUser)
    // State management
    this.store.dispatch(login({ user: newUser }))
  }

  handleLogout() {
    // this._currentUser.next(undefined!)
    // State management
    this.store.dispatch(logout())

  }

  authenticate(): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${environment.apiUrl}/users/profile`, { withCredentials: true })
      .pipe(tap(currentProfile => this.handleLogin(currentProfile)), catchError((err) => {
        return EMPTY;
      }))
  }
}
