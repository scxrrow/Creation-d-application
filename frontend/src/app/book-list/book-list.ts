// 1. Ajoute ChangeDetectorRef dans l'import
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Book, BookService } from '../book'; 

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookListComponent implements OnInit {
  
  books: Book[] = []; 


  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error(err)
    });
  }

  deleteBook(id?: number): void {
    if (id && confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      this.bookService.deleteBook(id).subscribe({
        next: () => this.loadBooks(),
        error: (err) => console.error(err)
      });
    }
  }
}