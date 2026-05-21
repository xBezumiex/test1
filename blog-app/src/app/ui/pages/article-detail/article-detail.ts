import { Component, DestroyRef, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { AuthStoreService } from '../../../services/auth/auth-store.service';
import {
  ArticleWebSocketService,
  WsCommentCreatedPayload,
  WsCommentRatingChangedPayload,
  WsArticleRatingChangedPayload
} from '../../../services/websocket/article-websocket.service';

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
export class ArticleDetailComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private service = inject(ARTICLE_SERVICE);
  private store = inject(ArticleStoreService);
  private titleService = inject(Title);
  private fb = inject(FormBuilder);
  private wsService = inject(ArticleWebSocketService);
  private destroyRef = inject(DestroyRef);
  protected authStore = inject(AuthStoreService);

  protected article = this.store.article;
  protected comments = this.store.comments;

  protected commentForm = this.fb.group({
    name: ['', Validators.required],
    text: ['', [Validators.required, Validators.minLength(10)]]
  });

  private articleId = '';

  constructor() {
    effect(() => {
      const user = this.authStore.user();
      if (user) {
        this.commentForm.patchValue({ name: user.username }, { emitEvent: false });
        this.commentForm.controls.name.disable({ emitEvent: false });
      } else {
        this.commentForm.controls.name.enable({ emitEvent: false });
        this.commentForm.patchValue({ name: '' }, { emitEvent: false });
      }
    });
  }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id')!;

    this.service.getArticleWithComments(this.articleId).subscribe(result => {
      this.store.saveArticle(result.article);
      this.store.saveComments(result.comments);
      this.titleService.setTitle(result.article.title + ' | Blog App');
    });

    this.initWebSocket();
  }

  ngOnDestroy(): void {
    this.wsService.unsubscribeFromArticle(this.articleId);
  }

  private initWebSocket(): void {
    this.wsService.connect();
    this.wsService.subscribeToArticle(this.articleId);

    this.wsService.on<WsCommentCreatedPayload>('comment-created')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(payload => {
        const existing = this.store.comments();
        if (existing.some(c => c.id === payload.commentId)) return;
        const newComment: Comment = {
          id: payload.commentId,
          articleId: payload.articleId,
          name: payload.username,
          text: payload.content,
          date: new Date(payload.createdAt).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          }),
          rating: 0
        };
        this.store.saveComments([...existing, newComment]);
      });

    this.wsService.on<WsArticleRatingChangedPayload>('article-rating-changed')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(payload => {
        const article = this.store.article();
        if (article && article.id === payload.articleId) {
          this.store.saveArticle({ ...article, rating: payload.rating });
        }
      });

    this.wsService.on<WsCommentRatingChangedPayload>('comment-rating-changed')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(payload => {
        const updated = this.store.comments().map(c =>
          c.id === payload.commentId ? { ...c, rating: payload.rating } : c
        );
        this.store.saveComments(updated);
      });
  }

  protected onRateArticle(delta: number): void {
    const id = this.article()?.id;
    if (id == null) return;
    this.service.updateArticleRating(id, delta).subscribe(article => {
      this.store.saveArticle(article);
    });
  }

  protected onRateComment(commentId: string, delta: number): void {
    this.service.updateCommentRating(commentId, delta).subscribe(comments => {
      this.store.saveComments(comments);
    });
  }

  protected onAddComment(): void {
    if (this.commentForm.invalid) return;
    const { text } = this.commentForm.value;
    const user = this.authStore.user();
    const name = user?.username ?? (this.commentForm.getRawValue().name ?? '');
    const comment: Comment = {
      id: '',
      articleId: this.article()!.id,
      name,
      text: text!.trim(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      rating: 0
    };
    this.service.addComment(comment).subscribe(comments => {
      this.store.saveComments(comments);
      this.commentForm.patchValue({ text: '' });
      this.commentForm.controls.text.markAsUntouched();
    });
  }
}
