import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksFormPage } from './books-form.page';  // Corrigido de BookFormPage para BooksFormPage

const routes: Routes = [
  { path: '', component: BooksFormPage },
  { path: ':id', component: BooksFormPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksFormPageRoutingModule {}

