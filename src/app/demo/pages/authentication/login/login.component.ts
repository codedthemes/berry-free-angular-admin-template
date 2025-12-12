// angular import
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { email, Field, form, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [RouterModule, Field],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private cd = inject(ChangeDetectorRef);

  submitted = signal(false);
  error = signal('');

  loginModal = signal<{ email: string; password: string }>({
    email: 'info@coddedtheme.com',
    password: '123456'
  });

  loginForm = form(this.loginModal, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });
  });

  onSubmit(event: Event) {
    this.submitted.set(true);
    this.error.set('');

    event.preventDefault();
    const credentials = this.loginModal();
    console.log('login user logged in with:', credentials);
    this.cd.detectChanges();
  }
}
