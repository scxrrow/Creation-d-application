import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Vérifie que tu importes bien 'BookListComponent' depuis le fichier './library/library'
import { BookListComponent } from './library/library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent], // C'est bien BookListComponent qu'il faut ici
  templateUrl: './app.html', // (ou app.html selon ton projet)
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'library-frontend';
}