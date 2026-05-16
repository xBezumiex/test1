import { Component, computed, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, of, startWith } from 'rxjs';
import { Article } from '../../../models/article.model';
import { ArticleFormOutput } from '../../../models/article-form-output.model';
import { Category } from '../../../models/category.model';
import { CATEGORY_SERVICE } from '../../../services/categories/categories-service.token';

interface MinLengthError {
  requiredLength: number;
  actualLength: number;
}

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleFormComponent implements OnInit {
  public article = input<Article | null>(null);
  public submitArticle = output<ArticleFormOutput>();
  public cancelForm = output<void>();

  private fb = inject(FormBuilder);
  private categoryService = inject(CATEGORY_SERVICE);

  protected categories = signal<Category[]>([]);
  protected selectedImageFile = signal<File | null>(null);
  protected imagePreviewUrl = signal<string | null>(null);

  protected form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(25)]],
    content: ['', Validators.required],
    categoryName: ['']
  });

  protected filteredCategories$!: Observable<Category[]>;

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
        this.form.patchValue({
          title: article.title,
          content: article.content,
          categoryName: article.categoryName ?? ''
        });
      } else {
        this.form.reset();
        this.selectedImageFile.set(null);
        this.imagePreviewUrl.set(null);
      }
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(cats => {
      this.categories.set(cats);
    });

    this.filteredCategories$ = this.form.controls.categoryName.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCategories(value ?? ''))
    );
  }

  private filterCategories(value: string): Category[] {
    const lower = value.toLowerCase();
    return this.categories().filter(c => c.name.toLowerCase().includes(lower));
  }

  protected onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    this.selectedImageFile.set(file);
    const reader = new FileReader();
    reader.onload = () => this.imagePreviewUrl.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  protected clearImage(): void {
    this.selectedImageFile.set(null);
    this.imagePreviewUrl.set(null);
  }

  protected hasError(controlName: string): boolean {
    const control = this.form.get(controlName);
    return Boolean(control?.invalid && control.touched);
  }

  protected getControlErrors(controlName: string): string[] {
    const control = this.form.get(controlName);
    const errors: Record<string, unknown> | null = control?.errors ?? null;
    if (!errors) return [];
    return Object.entries(errors).map(([key, value]) => this.getErrorStr(key, value));
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

    const { title, content, categoryName } = this.form.value;
    const existing = this.article();
    const typedCategoryName = categoryName?.trim() || '';

    const resolveCategory = (): Observable<Category | null> => {
      if (!typedCategoryName) return of(null);
      const found = this.categories().find(
        c => c.name.toLowerCase() === typedCategoryName.toLowerCase()
      );
      if (found) return of(found);
      return this.categoryService.addCategory(typedCategoryName);
    };

    resolveCategory().subscribe(category => {
      const catId = category?.id;
      const catName = category?.name;
      const article: Article = existing
        ? { ...existing, title: title!.trim(), content: content!.trim(), categoryId: catId, categoryName: catName }
        : {
            id: '',
            title: title!.trim(),
            content: content!.trim(),
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            categoryId: catId,
            categoryName: catName
          };

      this.submitArticle.emit({
        article,
        imageFile: this.selectedImageFile() ?? undefined
      });

      this.form.reset();
      this.selectedImageFile.set(null);
      this.imagePreviewUrl.set(null);
    });
  }

  protected onCancel(): void {
    this.form.reset();
    this.selectedImageFile.set(null);
    this.imagePreviewUrl.set(null);
    this.cancelForm.emit();
  }
}
