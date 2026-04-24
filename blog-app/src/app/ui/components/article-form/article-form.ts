import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleFormComponent implements OnChanges {
  @Input() article: Article | null = null;
  @Output() submitArticle = new EventEmitter<Article>();
  @Output() cancelForm = new EventEmitter<void>();

  form: FormGroup;

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

  get isEditMode(): boolean {
    return this.article !== null;
  }

  get titleControl() {
    return this.form.get('title')!;
  }

  get contentControl() {
    return this.form.get('content')!;
  }

  onSubmit(): void {
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

  onCancel(): void {
    this.form.reset();
    this.cancelForm.emit();
  }
}
