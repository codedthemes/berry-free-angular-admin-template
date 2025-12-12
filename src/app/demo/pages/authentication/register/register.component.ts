// angular import
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { email, Field, form, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-register',
  imports: [CommonModule, RouterModule, Field],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private cd = inject(ChangeDetectorRef);

  submitted = signal(false);
  error = signal('');
  showPassword = signal(false);

  registerModel = signal<{ email: string; password: string; firstName: string; lastName: string }>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  registerForm = form(this.registerModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
    minLength(schemaPath.password, 8, { message: 'Password must be at least 8 characters' });
    required(schemaPath.firstName, { message: 'First Name is required' });
    required(schemaPath.lastName, { message: 'Last Name is required' });
  });

  onSubmit(event: Event) {
    this.submitted.set(true);
    this.error.set('');
    event.preventDefault();
    const credentials = this.registerModel();
    console.log('register user logged in with:', credentials);
    this.cd.detectChanges();
  }
}
