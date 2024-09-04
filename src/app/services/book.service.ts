import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  nome_livro: string;
  nome_autor: string;
  genero: string;
  editora: string;
  numero_paginas: number;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
   // private apiUrl = 'http://10.0.2.2:8080/api/books';
    private apiUrl = 'http://localhost:3000/api/books'; // URL base da API

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/ExibirBiblioteca`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/AdicionarLivro`, book);
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
