import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signInForm = this.formbuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(3)], passwordValidator],

    address: this.formbuilder.group({
      street: [[''],[Validators.required]],
      city: [[''],[Validators.required]],
      zipCode: [[''],[Validators.required]]
    }),
  });

  // user!: User;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {

  }

  onSubmit() {
    // if (this.signInForm.valid) {
      // user = this.signInForm.value;
      console.log(this.signInForm.value);
    // }
  }
}
