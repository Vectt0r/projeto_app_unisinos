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
    this.loadBooks(); //carrega os livros ao entrar na página
  }

  viewBook(bookId: number) {
    this.router.navigate(['/books/view', bookId]);  // Navega para a página de visualização de um livro
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  editBook(id: number) {
    this.router.navigate(['/books-form', id]); //navega para o formulário de edição de livros
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks(); //atualiza a lista de livros após a exclusão
    });
  }

  logout() {
    //redireciona para a tela de login
    this.router.navigate(['/login']);
  }
}
