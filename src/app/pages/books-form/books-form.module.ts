import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksFormPageRoutingModule } from './books-form-routing.module';

import { BooksFormPage } from './books-form.page';  // Corrigido de BookFormPage para BooksFormPage

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksFormPageRoutingModule
  ],
  declarations: [BooksFormPage]
})
export class BooksFormPageModule {}
