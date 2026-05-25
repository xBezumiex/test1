import { Injectable, OnDestroy } from '@angular/core';
import { EMPTY, filter, map, Observable, Subject, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from '../../../environments/environment';
import {
  WsEvent,
  WsSendMessage,
  WsCommentCreatedPayload,
  WsCommentRatingChangedPayload,
  WsArticleRatingChangedPayload
} from './article-websocket.types';

export type { WsCommentCreatedPayload, WsCommentRatingChangedPayload, WsArticleRatingChangedPayload };

@Injectable({ providedIn: 'root' })
export class ArticleWebSocketService implements OnDestroy {
  private socket$: WebSocketSubject<WsEvent> | null = null;
  private readonly messages$ = new Subject<WsEvent>();
  private socketSub: Subscription | null = null;

  connect(): void {
    if (!environment.wsUrl || (this.socket$ && !this.socket$.closed)) return;

    try {
      this.socket$ = webSocket<WsEvent>({
        url: environment.wsUrl,
        deserializer: (e: MessageEvent) => {
          try {
            return JSON.parse(e.data as string) as WsEvent;
          } catch {
            return { event: '', data: { type: '', payload: null } };
          }
        },
        serializer: (msg: WsSendMessage) => JSON.stringify(msg)
      });

      this.socketSub = this.socket$.pipe(
        catchError(err => {
          console.warn('[WS] connection error:', err);
          this.socket$ = null;
          return EMPTY;
        })
      ).subscribe({
        next: msg => this.messages$.next(msg),
        error: () => { this.socket$ = null; }
      });
    } catch (err) {
      console.warn('[WS] failed to connect:', err);
    }
  }

  subscribeToArticle(articleId: string): void {
    if (!this.socket$ || this.socket$.closed) return;
    this.socket$.next({ event: 'subscribe-article', data: articleId } as unknown as WsEvent);
  }

  unsubscribeFromArticle(articleId: string): void {
    if (!this.socket$ || this.socket$.closed) return;
    this.socket$.next({ event: 'unsubscribe-article', data: articleId } as unknown as WsEvent);
  }

  on<T>(eventName: string): Observable<T> {
    return this.messages$.pipe(
      filter(msg => msg.event === eventName),
      map(msg => (msg.data as { payload: T }).payload)
    );
  }

  ngOnDestroy(): void {
    this.socketSub?.unsubscribe();
    this.socket$?.complete();
    this.messages$.complete();
  }
}
