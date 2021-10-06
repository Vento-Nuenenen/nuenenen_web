import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';
import { initializeApp } from 'firebase/app';
import { environment } from '@environments/environment';

initializeApp(environment.firebaseConfig, 'nünenen-dev');
@NgModule({
  declarations: [HeaderComponent, LoginComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
