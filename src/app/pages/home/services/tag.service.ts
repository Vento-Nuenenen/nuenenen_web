import { Injectable } from '@angular/core';
import {
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(private afs: Firestore) {}

  getTags(): Observable<Tag[]> {
    return collectionData<Tag>(
      query<Tag>(
        collection(this.afs, 'tags') as CollectionReference<Tag>,
        where('published', '==', true)
      ),
      { idField: 'id' }
    );
  }
}
