import { Component, Input, OnInit } from '@angular/core';
import { getDownloadURL, percentage, ref, Storage, UploadTask } from '@angular/fire/storage';
import { uploadBytesResumable, UploadTaskSnapshot } from '@firebase/storage';
import { Observable, of } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload-task',
  templateUrl: './file-upload-task.component.html',
  styleUrls: ['./file-upload-task.component.scss'],
})
export class FileUploadTaskComponent implements OnInit {
  @Input() file!: File;

  task!: UploadTask;

  uploadPercent$: Observable<{
    progress: number;
    snapshot: UploadTaskSnapshot;
  }> = of({} as any);
  snapshot: Observable<any> = of();
  downloadURL = '';

  constructor(private storage: Storage) {}

  ngOnInit() {
    this.startUpload();
  }

  async startUpload() {
    const path = `blog_images/${Date.now()}_${this.file.name}`;
    const storageRef = ref(this.storage, path);
    this.task = uploadBytesResumable(storageRef, this.file);
    this.uploadPercent$ = percentage(this.task);
    await this.task;
    //TODO: return url to download image later on
    const url = await getDownloadURL(storageRef);
  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
