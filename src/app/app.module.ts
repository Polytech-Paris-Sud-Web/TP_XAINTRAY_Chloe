import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {ArticlesComponent} from './articles/articles.component';
import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';
import {ArticleCreationComponent} from './article-creation/article-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {ArticleUniqueComponent} from './article-unique/article-unique.component';

const appRoutes: Routes = [
  {path: 'create', component: ArticleCreationComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'article/:id', component: ArticleUniqueComponent},
  {path: '', component: ArticlesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleUniqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent],
})

export class AppModule {

}
