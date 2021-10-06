import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithPopup,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '@shared/models/user';
import { switchMap } from 'rxjs/operators';
import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User | null> = of(null);
  constructor(
    private auth: Auth,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.user$ = new Observable((observer: any) => onAuthStateChanged(auth, observer));
  }

  getUser(): Observable<User | null> {
    return this.user$;
  }

  async googleLogin() {
    const provider = new GoogleAuthProvider();
    this.oAuthLogin(provider);
  }

  private async oAuthLogin(p: any) {
    // get provider, sign in
    const provider = new OAuthProvider(p);
    const credential = await signInWithPopup(this.auth, provider);
    const additionalInfo = getAdditionalUserInfo(credential);

    // create user in db
    if (additionalInfo?.isNewUser) {
      this.notificationService.notify(
        NotificationType.SUCCESS,
        'Danke das du dich registriert hast'
      );
    } else {
      this.notificationService.notify(
        NotificationType.SUCCESS,
        'Willkommen zurück, ' + additionalInfo?.profile
      );
    }
  }
  signOutUser(): void {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'Du wurdest erfolgreich ausgeloggt'
        );
      })
      .catch((error) => {
        this.notificationService.notify(
          NotificationType.ERROR,
          'Oops, du konntest leider nicht ausgeloggt werden'
        );
      });
  }
}
