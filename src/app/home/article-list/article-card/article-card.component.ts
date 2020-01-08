import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Article } from '@app/home/article-list/shared/article';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent {
  @Input() article: Article;
}
