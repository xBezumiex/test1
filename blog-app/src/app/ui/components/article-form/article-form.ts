import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-form.html',
  styleUrl: './article-form.scss'
})
export class ArticleFormComponent {
  @Output() submitArticle = new EventEmitter<Article>();
  @Output() cancelForm = new EventEmitter<void>();

  title: string = '';
  content: string = '';

  onSubmit(): void {
    if (this.title.trim() && this.content.trim()) {
      const newArticle: Article = {
        id: Date.now(),
        title: this.title,
        content: this.content,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        })
      };
      this.submitArticle.emit(newArticle);
      this.resetForm();
    }
  }

  onCancel(): void {
    this.resetForm();
    this.cancelForm.emit();
  }

  private resetForm(): void {
    this.title = '';
    this.content = '';
  }
}
