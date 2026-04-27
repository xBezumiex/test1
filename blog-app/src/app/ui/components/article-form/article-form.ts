import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleFormComponent implements OnChanges {
  @Input() public article: Article | null = null;
  @Output() public submitArticle = new EventEmitter<Article>();
  @Output() public cancelForm = new EventEmitter<void>();

  protected form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(25)]],
      content: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['article']) {
      if (this.article) {
        this.form.patchValue({ title: this.article.title, content: this.article.content });
      } else {
        this.form.reset();
      }
    }
  }

  protected get isEditMode(): boolean {
    return this.article !== null;
  }

  protected get titleControl() {
    return this.form.get('title')!;
  }

  protected get contentControl() {
    return this.form.get('content')!;
  }

  protected onSubmit(): void {
    if (this.form.invalid) return;

    const { title, content } = this.form.value;

    if (this.isEditMode && this.article) {
      this.submitArticle.emit({ ...this.article, title: title.trim(), content: content.trim() });
    } else {
      this.submitArticle.emit({
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      });
    }

    this.form.reset();
  }

  protected onCancel(): void {
    this.form.reset();
    this.cancelForm.emit();
  }
}
