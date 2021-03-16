import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ArticleService} from '../article.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Article} from '../models/article.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['Title...', Validators.required ],
      content : ['', Validators.required ],
      author : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  create(): void{

    const newArticle = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      author: this.articleForm.value.author
    };
    this.articleService.createdArticle(newArticle).subscribe(() => {
      this.router.navigateByUrl('/');
    });


  }
}
