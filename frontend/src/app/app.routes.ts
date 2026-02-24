import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list';
import { BookFormComponent } from './book-form/book-form';

export const routes: Routes = [
  // Si l'URL est /books -> on affiche la liste
  { path: 'books', component: BookListComponent },
  
  // Si l'URL est /books/new -> on affiche le formulaire (mode création)
  { path: 'books/new', component: BookFormComponent },
  
  // Si l'URL est /books/1/edit -> on affiche le formulaire (mode édition)
  { path: 'books/:id/edit', component: BookFormComponent },
  
  // Par défaut (URL vide) -> on redirige vers /books
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];
