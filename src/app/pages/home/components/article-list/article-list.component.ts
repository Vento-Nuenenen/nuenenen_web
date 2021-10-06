import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  isFilterActive = false;
  isListView = false;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  create(): void {
    this.router.navigate(['/home/new']);
  }

  toggleViewMode(mode: string) {
    this.isListView = mode === 'grid' ? false : true;
  }

  toggleFilter() {
    this.isFilterActive = !this.isFilterActive;
  }
}
