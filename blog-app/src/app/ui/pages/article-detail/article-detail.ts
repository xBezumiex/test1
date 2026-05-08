import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Comment } from '../../../models/comment.model';
import { ARTICLE_SERVICE } from '../../../services/article/article-service.token';
import { ArticleStoreService } from '../../../services/article-store.service';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.scss'
})
export class ArticleDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(ARTICLE_SERVICE);
  private store = inject(ArticleStoreService);
  private titleService = inject(Title);
  private fb = inject(FormBuilder);

  protected article = this.store.article;
  protected comments = this.store.comments;

  protected commentForm = this.fb.group({
    name: ['', Validators.required],
    text: ['', [Validators.required, Validators.minLength(10)]]
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getArticleWithComments(id).subscribe(result => {
      this.store.saveArticle(result.article);
      this.store.saveComments(result.comments);
      this.titleService.setTitle(result.article.title + ' | Blog App');
    });
  }

  protected onRateArticle(delta: number): void {
    const id = this.article()?.id;
    if (id == null) return;
    this.service.updateArticleRating(id, delta).subscribe(article => {
      this.store.saveArticle(article);
    });
  }

  protected onRateComment(commentId: number, delta: number): void {
    this.service.updateCommentRating(commentId, delta).subscribe(comments => {
      this.store.saveComments(comments);
    });
  }

  protected onAddComment(): void {
    if (this.commentForm.invalid) return;
    const { name, text } = this.commentForm.value;
    const comment: Comment = {
      id: Date.now(),
      articleId: this.article()!.id,
      name: name!.trim(),
      text: text!.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      rating: 0
    };
    this.service.addComment(comment).subscribe(comments => {
      this.store.saveComments(comments);
      this.commentForm.reset();
    });
  }
}
