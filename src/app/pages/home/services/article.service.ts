import { Injectable, EventEmitter } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  docSnapshots,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { NotificationService } from '@shared/services/notification.service';
import { NotificationType } from '@shared/models/notification-type';
import { Article } from '../models/article';
import { addDoc, getDoc } from '@firebase/firestore';

@Injectable({ providedIn: 'root' })
export class ArticleService {
  constructor(private afs: Firestore, private notificationService: NotificationService) {}

  getArticles(): Observable<Article[]> {
    return collectionData<Article>(
      query<Article>(
        collection(this.afs, 'articles') as CollectionReference<Article>,
        where('published', '==', true)
      ),
      { idField: 'id' }
    );
  }

  async getArticle(id: string): Promise<Article> {
    const docRef = doc(this.afs, 'articles', id);
    return (await getDoc(docRef)).data() as Article;
  }

  createArticle(article: Article) {
    addDoc(collection(this.afs, 'articles'), article)
      .then(() =>
        this.notificationService.notify(
          NotificationType.SUCCESS,
          'Dein Beitrag wurde erfolgreich publiziert'
        )
      )
      .catch((error) => this.notificationService.notify(NotificationType.ERROR, error));
  }
}
