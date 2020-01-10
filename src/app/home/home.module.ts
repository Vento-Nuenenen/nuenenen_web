import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HomeComponent } from '@home/home.component';
import { ArticleListComponent } from '@home/article-list/article-list.component';
import { NewArticleComponent } from '@home/article-list/new-article/new-article.component';
import { NextEventsComponent } from '@home/article-list/next-events/next-events.component';
import { MaterialModule } from '@core/modules/material.module';
import { ArticleCardComponent } from './article-list/article-card/article-card.component';
import { SharedModule } from '@app/shared/shared.module';
import { ArticleFilterComponent } from './article-list/article-filter/article-filter.component';

@NgModule({
  declarations: [
    HomeComponent,
    ArticleListComponent,
    NewArticleComponent,
    NextEventsComponent,
    ArticleCardComponent,
    ArticleFilterComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule, AngularFireAuthModule, AngularFirestoreModule, SharedModule],
  exports: [ArticleCardComponent]
})
export class HomeModule {}
