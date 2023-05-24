import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  signInForm!: FormGroup;

  user!: User;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.signInForm = this.formbuilder.group({
      userName: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],

      address: this.formbuilder.group({
        street: [''],
        city: [''],
        zipCode: [''],
      }),
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.user = this.signInForm.value;
      console.log(this.user);
    }
  }
}
