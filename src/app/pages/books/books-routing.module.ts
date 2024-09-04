import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPage } from './books.page';
import { BookViewComponent } from '../book-view/book-view.component'; // Importe o componente de visualização

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: 'view/:id',  // Defina a rota com o parâmetro `id`
    component: BookViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
