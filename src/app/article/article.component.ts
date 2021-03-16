import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Article} from '../models/article.model';
import {ArticleService} from '../article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article | undefined;
  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter();

  constructor(private articleService: ArticleService, private router: Router){}

  ngOnInit(): void {
  }

  delete(): void {
    if (this.article) {
      this.deletedArticle.emit(this.article);
    }
  }

  show(): void{
    if (this.article) {
      this.router.navigateByUrl('/article/' + this.article.id);
    }
  }

}

