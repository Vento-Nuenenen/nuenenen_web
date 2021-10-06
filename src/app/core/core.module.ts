import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { initializeApp } from 'firebase/app';
import { environment } from '@environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

const app = initializeApp(environment.firebaseConfig, 'nuenenen-dev');
@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    provideFirebaseApp(() => app),
    provideFirestore(() => getFirestore(app)),
    provideAuth(() => getAuth(app)),
    provideStorage(() => getStorage(app)),
    MaterialModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
