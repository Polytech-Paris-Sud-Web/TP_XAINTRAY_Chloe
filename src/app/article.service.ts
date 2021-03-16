import { Injectable } from '@angular/core';
import {Article} from './models/article.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  public getArticles(): Observable<any> {
    return this.http.get('http://localhost:3000/articles');
  }

  public getArticle(id: number): Observable<Article>{
    return this.http.get<Article>('http://localhost:3000/articles/' + id);
  }

  public deletedArticle(id: number): Observable<any> {
    return this.http.delete('http://localhost:3000/articles/' + id);
  }

  public createdArticle(newArticle: Article): Observable<any>{
    return this.http.post('http://localhost:3000/articles/', newArticle);
  }
}
