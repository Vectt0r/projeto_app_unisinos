import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  imports: [
    IonicModule,
    FormsModule
  ],
  standalone: true
})
export class BookViewComponent implements OnInit {
  book: Book = {
    id: 0,
    nome_livro: '',
    nome_autor: '',
    genero: '',
    editora: '',
    numero_paginas: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(+id).subscribe((book) => {
        this.book = book;
      });
    }
  }

  goBack() {
    this.router.navigate(['/books']);
  }

  submitForm() {
  }
}
