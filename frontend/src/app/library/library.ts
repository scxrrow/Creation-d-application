import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- INDISPENSABLE pour les formulaires
import { Book, BookService } from '../book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- AJOUTE FormsModule ICI
  templateUrl: './library.html',
  styleUrl: './library.css'
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  // Cet objet vide sert à remplir le formulaire
  newBook: Book = {
    title: '',
    author: '',
    year: 2024,
    category: ''
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  // 1. Fonction pour AJOUTER
  onAddBook() {
    this.bookService.addBook(this.newBook).subscribe(savedBook => {
      // Une fois sauvegardé, on recharge la liste pour voir le nouveau livre
      this.loadBooks();
      // Et on vide le formulaire
      this.newBook = { title: '', author: '', year: 2024, category: '' };
    });
  }

  // 2. Fonction pour SUPPRIMER
  onDeleteBook(id?: number) {
    if (id) {
      if(confirm("Veux-tu vraiment supprimer ce livre ?")) {
        this.bookService.deleteBook(id).subscribe(() => {
          this.loadBooks(); // On rafraîchit la liste
        });
      }
    }
  }
}