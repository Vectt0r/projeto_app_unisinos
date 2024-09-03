import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  nome_livro: string;
  nome_autor: string;
  genero: string;
  editora: string;
  numero_paginas: 0;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private nextId = 1;

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  getBookById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addBook(book: Book) {
    book.id = this.nextId++;
    this.books.push(book);
  }

  updateBook(updatedBook: Book) {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number) {
    this.books = this.books.filter(book => book.id !== id);
  }
}
