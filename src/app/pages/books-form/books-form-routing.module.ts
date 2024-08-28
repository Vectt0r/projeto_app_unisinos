import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormPage } from './books-form.page';

const routes: Routes = [
  {
    path: '',
    component: BookFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksFormPageRoutingModule {}

