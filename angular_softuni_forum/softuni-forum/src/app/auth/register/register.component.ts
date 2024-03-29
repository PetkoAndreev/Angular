import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CreateUserDto } from 'src/app/core/services/user.service';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)])

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, emailValidator]),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl(null, passwordMatch(this.passwordControl)),
    }),
    phoneRegion: new FormControl(),
    phone: new FormControl(),
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  handleRegister(): void {
    const { username, email, passwords, phone, phoneRegion } = this.registerFormGroup.value
    const body: CreateUserDto = {
      username: username,
      email: email,
      password: passwords.password,
      ...(!!phone && { phone: phoneRegion + phone }),
    }
    // Variant 2
    // if (phone) {
    //   body.phone = phoneRegion + phone
    // }

    this.authService.register$(body).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }



}
