import { Component } from '@angular/core';
import { Book, BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
})
export class BooksPage {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ionViewWillEnter() {
    this.loadBooks(); // Carrega os livros ao entrar na página
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data; // Inscreve-se no Observable para obter os dados
    });
  }

  editBook(id: number) {
    this.router.navigate(['/books-form', id]); // Navega para o formulário de edição de livros
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks(); // Atualiza a lista de livros após a exclusão
    });
  }

  logout() {
    // Redireciona para a tela de login
    this.router.navigate(['/login']);
  }
}
