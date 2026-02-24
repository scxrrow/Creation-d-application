import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 1. LE MODÈLE TYPESCRIPT (Équivalent de ton Book.java)
export interface Book {
  id?: number;
  title: string;
  author: string;
  year: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // L'adresse de ton API Spring Boot
  private apiUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  // --- LES APPELS VERS SPRING BOOT ---

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}