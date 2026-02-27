import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list';
import { BookFormComponent } from './book-form/book-form';

export const routes: Routes = [

  { path: 'books', component: BookListComponent },
  
  { path: 'books/new', component: BookFormComponent },
  
  { path: 'books/:id/edit', component: BookFormComponent },
  
  { path: '', redirectTo: '/books', pathMatch: 'full' }
];
