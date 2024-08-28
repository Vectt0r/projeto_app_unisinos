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
    this.books = this.bookService.getBooks();
  }

  editBook(id: number) {
    this.router.navigate(['/book-form', { id }]);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id);
    this.books = this.bookService.getBooks();
  }
}
