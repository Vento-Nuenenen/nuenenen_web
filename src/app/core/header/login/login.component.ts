import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { User } from 'app/shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  user$ = new Observable<User>();
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.user;
    this.authService.user.subscribe((value) => console.log('user', value));
  }

  login(): void {
    this.authService.googleLogin();
  }

  logout(): void {
    this.authService.signOut();
  }
}
