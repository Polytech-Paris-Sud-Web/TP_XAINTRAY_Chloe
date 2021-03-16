import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  ngOnInit(): void {
    this.get();
  }

  private get(): void {
    this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  delete(article: Article): void {
    if (article.id) {
      this.articleService.deletedArticle(article.id).subscribe(() => {
        this.get();
      });
    }
  }

  create(article: Article): void {
    this.articleService.createdArticle(article).subscribe(() => {
      this.get();
    });
  }
}
