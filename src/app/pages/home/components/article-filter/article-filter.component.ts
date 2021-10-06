import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tag } from '@pages/home/models/tag';
import { MatChipInputEvent } from '@angular/material/chips';
import { map } from 'rxjs/operators';
import { ArticleService } from '../../services/article.service';
import { TagService } from '@pages/home/services/tag.service';
import { Observable, of } from 'rxjs';
import { Article } from '@pages/home/models/article';

@Component({
  selector: 'app-article-filter',
  templateUrl: './article-filter.component.html',
  styleUrls: ['./article-filter.component.scss'],
})
export class ArticleFilterComponent implements OnInit {
  @Output() changedArticles = new EventEmitter<Article[]>();
  tags: Tag[] = [];
  searchKeyWords: string[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor(private articleService: ArticleService, private tagService: TagService) {}

  ngOnInit(): void {
    this.tagService.getTags().subscribe((tags) => (this.tags = tags));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.searchKeyWords.push(value);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.filter();
  }

  remove(key: string): void {
    const index = this.searchKeyWords.indexOf(key);
    if (index >= 0) {
      this.searchKeyWords.splice(index, 1);
    }
    this.filter();
  }

  selectTag(tag: Tag) {
    this.tags.forEach((t) => (t.name === tag.name ? (t.active = !tag.active) : (t.active = false)));
    this.filter();
  }

  filter(): void {
    this.articleService
      .getArticles()
      .pipe(
        map((articles) => {
          let filteredArticles = articles;
          // Filters by tag
          const tag = this.tags.find((t) => !!t.active);
          if (tag) filteredArticles = articles.filter((a) => a.tag === tag.name);
          // Filters by searchKeyWords
          if (this.searchKeyWords.length) {
            filteredArticles = filteredArticles.filter((article) =>
              this.searchKeyWords.every(
                (key) =>
                  article.title.toLocaleLowerCase().includes(key.toLocaleLowerCase()) ||
                  article.description.toLocaleLowerCase().includes(key.toLocaleLowerCase())
              )
            );
          }
          return filteredArticles;
        })
      )
      .subscribe((articles: Article[]) => {
        this.changedArticles.emit(articles);
      });
  }
}
