import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../../services/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.page.html',
})
export class BooksFormPage implements OnInit {
  book: Book = { id: 0, nome_livro: '', nome_autor: '', genero: '', editora: '', numero_paginas: 0 }; //inicialização do objeto book

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadBook(parseInt(id, 10)); //carrega o livro caso o ID seja fornecido
    }
  }

  loadBook(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (book: Book) => {
        this.book = { ...book }; //garante que o objeto seja do tipo Book
      },
      error: (err) => {
        console.error('Erro ao carregar o livro:', err); //exibe o erro no console
      }
    });
  }

  saveBook(): void {
    if (this.book.id) {
      this.bookService.updateBook(this.book).subscribe({
        next: () => {
          this.router.navigate(['/books']); //redireciona para a lista de livros após a atualização
        },
        error: (err) => {
          console.error('Erro ao atualizar o livro:', err);
        }
      });
    } else {
      this.bookService.addBook(this.book).subscribe({
        next: () => {
          this.router.navigate(['/books']); //redireciona para a lista de livros após a adição
        },
        error: (err) => {
          console.error('Erro ao adicionar o livro:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/books']); //navega de volta para a lista de livros
  }

  submitForm(): void {
    this.saveBook(); //chama a função saveBook() ao submeter o formulário
  }
}
