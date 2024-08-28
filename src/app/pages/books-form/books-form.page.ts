import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-form',
  templateUrl: './books-form.page.html',
  styleUrls: ['./books-form.page.scss'],
})
export class BookFormPage {
  book: Book = { id: 0, titulo: '', autor: '', year: 0 };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {}

  goBack() {
    this.navCtrl.back();
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const book = this.bookService.getBookById(+id);
      if (book) {
        this.book = { ...book };
      }
    }
  }

  submitForm() {
    if (this.book.id) {
      this.bookService.updateBook(this.book);
    } else {
      this.bookService.addBook(this.book);
    }
    this.router.navigate(['/books']);
  }
}
