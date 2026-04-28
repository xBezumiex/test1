import { Component, computed, effect, inject, input, output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../../../models/article.model';

interface MinLengthError {
  requiredLength: number;
  actualLength: number;
}

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleFormComponent {
  public article = input<Article | null>(null);
  public submitArticle = output<Article>();
  public cancelForm = output<void>();

  private fb = inject(FormBuilder);

  protected form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(25)]],
    content: ['', Validators.required]
  });

  protected formTitle = computed(() =>
    this.article() ? 'Изменить статью' : 'Создание статьи'
  );

  protected saveButtonTitle = computed(() =>
    this.article() ? 'Сохранить' : 'Добавить'
  );

  constructor() {
    effect(() => {
      const article = this.article();
      if (article) {
        this.form.patchValue({ title: article.title, content: article.content });
      } else {
        this.form.reset();
      }
    });
  }

  protected hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid && control.touched);
  }

  protected getControlErrors(controlName: string): string[] {
    const control = this.form.get(controlName);
    const errors: Record<string, unknown> | null = control?.errors ?? null;

    if (!errors) return [];

    return Object.entries(errors).map(([key, value]) =>
      this.getErrorStr(key, value)
    );
  }

  private getErrorStr(errorCode: string, errorData: unknown): string {
    switch (errorCode) {
      case 'required':
        return 'Поле обязательно для заполнения';
      case 'minlength': {
        const { requiredLength, actualLength } = errorData as MinLengthError;
        return `Нужно ещё ${requiredLength - actualLength} символов`;
      }
      default:
        return 'Ошибка при заполнении поля';
    }
  }

  protected onSubmit(): void {
    if (this.form.invalid) return;

    const { title, content } = this.form.value;
    const article = this.article();

    if (article) {
      this.submitArticle.emit({ ...article, title: title!.trim(), content: content!.trim() });
    } else {
      this.submitArticle.emit({
        id: Date.now(),
        title: title!.trim(),
        content: content!.trim(),
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
