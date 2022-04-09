import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { enterEditMode, exitEditMode, IAuthModuleState, profileLoaded, profilePageInitialized } from 'src/app/+store';
import { IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm!: NgForm;

  // currentUser!: IUser; // If we want to use pipes

  currentUser$: Observable<IUser> = this.store.select(state => state.auth.profile.currentProfile)
  // .pipe(tap(profile => this.currentUser = profile)) // Profile with pipes
  isInEditMode$: Observable<boolean> = this.store.select(state => state.auth.profile.isInEditMode);

  hasErrorHappened: Observable<boolean> = this.store.select(state => state.auth.profile.errorHappened);

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<IAuthModuleState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(profilePageInitialized());
    this.hasErrorHappened.subscribe((hasError) => {
      if (hasError) {
        this.router.navigate(['/user/login'])
      }
    })
    // this.userService.getProfile$().subscribe({
    //   next: (user) => {
    //     // State management - ngRX
    //     this.store.dispatch(profileLoaded({ profile: user }));
    //     // this.currentUser = user;
    //   },
    //   error: () => {
    //     this.router.navigate(['/user/login'])
    //   }
    // })
  }

  enterEditMode(currentUser: IUser): void {
    this.store.dispatch(enterEditMode());

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        email: currentUser.email,
        username: currentUser.username,
        // Tel, because in IUser it's set to be tel, not phone
        phoneRegion: currentUser.tel && currentUser.tel.length > 4 ? currentUser.tel.substring(0, 4) : '',
        phone: currentUser.tel && currentUser.tel.length > 4 ? currentUser.tel.substring(4) : currentUser.tel
      })
    })
  }

  updateProfile(): void {
    this.exitEditMode();
  }

  exitEditMode(): void {
    this.store.dispatch(exitEditMode());
  }

}
