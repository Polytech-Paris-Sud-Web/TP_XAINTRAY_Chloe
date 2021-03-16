import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article.model';
import {ArticleService} from '../article.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article-unique',
  templateUrl: './article-unique.component.html',
  styleUrls: ['./article-unique.component.css']
})
export class ArticleUniqueComponent implements OnInit {

  article: Article | undefined;

  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.get();
  }

  get(): void{
    if(this.activatedRoute.snapshot.paramMap.get('id')) {
      this.articleService.getArticle(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe((article) => {
        this.article = article;
      });
    }
  }

  delete(): void{
    if(this.activatedRoute.snapshot.paramMap.get('id')) {
      this.articleService.deletedArticle(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }

}
