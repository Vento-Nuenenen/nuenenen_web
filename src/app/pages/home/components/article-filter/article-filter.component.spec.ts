import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleFilterComponent } from './article-filter.component';

describe('ArticleFilterComponent', () => {
  let component: ArticleFilterComponent;
  let fixture: ComponentFixture<ArticleFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
