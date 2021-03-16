import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUniqueComponent } from './article-unique.component';

describe('ArticleUniqueComponent', () => {
  let component: ArticleUniqueComponent;
  let fixture: ComponentFixture<ArticleUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
