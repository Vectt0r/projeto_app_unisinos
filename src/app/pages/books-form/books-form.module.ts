import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksFormPageRoutingModule } from './books-form-routing.module';

import { BookFormPage } from './books-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksFormPageRoutingModule
  ],
  declarations: [BookFormPage]
})
export class BooksFormPageModule {}
