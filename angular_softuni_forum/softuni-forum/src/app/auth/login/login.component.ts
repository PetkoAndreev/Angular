import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    // we have two options for email validator - custom one or Validators.pattern
    // 'email': new FormControl(null, [Validators.required, Validators.pattern(/.{6,}@gmail\.(bg|com)/)]),
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    // TODO validate user's data.

  }

  handleLogin(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      complete: () => {

      },
      error: (err) => {
        this.errorMessage = err.error.message
      }
    })
  }

}
