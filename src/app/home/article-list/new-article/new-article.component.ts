import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '@app/home/article-list/shared/article.service';
import { Article } from '@app/home/article-list/shared/article';
import { AuthService } from '@core/auth/auth.service';
import { Tag } from '@shared/models/tag';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
  public articleForm: FormGroup;
  public article: Article;
  public tags: Tag[];
  private userName: string;

  constructor(private articleService: ArticleService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.tags = this.articleService.tags;
    this.articleForm = this.inizializeFormGroup();
    this.articleForm.valueChanges.subscribe(article => (this.article = Object.assign({}, article)));
  }

  save(): void {
    const article: Article = Object.assign({}, this.articleForm.value);
    this.articleService.createArticle(article);
  }

  abort(): void {
    this.router.navigate(['/home']);
  }

  inizializeFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      author: new FormControl(this.userName),
      image: new FormControl(''),
      created: new FormControl(Date.now()),
      tag: new FormControl('')
    });
  }
}
