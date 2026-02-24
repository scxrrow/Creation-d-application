// 1. Ajoute ChangeDetectorRef dans l'import
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Book, BookService } from '../book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookFormComponent implements OnInit {

  book: Book = { title: '', author: '', year: 2024, category: '' };
  isEditMode = false;

  // 2. Injecte le ChangeDetectorRef ici
  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.isEditMode = true;
      this.bookService.getBookById(+id).subscribe({
        next: (data) => {
          this.book = data;
          // 3. Force la mise à jour visuelle des cases !
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
          this.router.navigate(['/books']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.book.id) {
      this.bookService.updateBook(this.book.id, this.book).subscribe({
        next: () => this.router.navigate(['/books'])
      });
    } else {
      this.bookService.addBook(this.book).subscribe({
        next: () => this.router.navigate(['/books'])
      });
    }
  }
}