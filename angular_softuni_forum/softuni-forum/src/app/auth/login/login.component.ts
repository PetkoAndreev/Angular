import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAuthModuleState, initializeLoginState, loginProcessError, startLoginProcess } from 'src/app/+store';
import { loginErrorMessageSelector, loginIsLoginPendingSelector } from 'src/app/+store/selectors';
import { AuthService } from 'src/app/core/services/auth.service';
import { MessageBusService, MessageType } from 'src/app/core/services/message-bus.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  errorMessage$: Observable<string> = this.store.select(loginErrorMessageSelector);
  isLoginPending$: Observable<boolean> = this.store.select(loginIsLoginPendingSelector);

  loginFormGroup: FormGroup = this.formBuilder.group({
    // we have two options for email validator - custom one or Validators.pattern
    // 'email': new FormControl(null, [Validators.required, Validators.pattern(/.{6,}@gmail\.(bg|com)/)]),
    'email': new FormControl('', { validators: [Validators.required, emailValidator], updateOn: 'blur' }),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageBus: MessageBusService,
    private activatedRoute: ActivatedRoute,
    private store: Store<IAuthModuleState>,
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(initializeLoginState());
    // this.loginFormGroup.get('email')?.valueChanges.subscribe(value => {
    //   console.log('email changed', value)
    // })
  }

  ngOnDestroy(): void {
    this.store.dispatch(initializeLoginState());
  }

  loginHandler(): void {
    // TODO validate user's data.
    // console.log('from clickHandler', this.loginFormGroup.valid);

  }

  handleLogin(): void {
    // console.log('from ngSubmit', this.loginFormGroup.valid);
    this.store.dispatch(startLoginProcess());
    // this.errorMessage = '';
    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        if (this.activatedRoute.snapshot.queryParams['redirect-to']) {
          this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['redirect-to'])
        }
        else {
          this.router.navigate(['/home']);
        }

        this.messageBus.notifyForMessage({ text: 'User successfully logged in!', type: MessageType.Success })
      },
      complete: () => {

      },
      error: (err) => {
        this.store.dispatch(loginProcessError({ errorMessage: err.error.message }));
        // this.errorMessage = err.error.message
      }
    })
  }

}
