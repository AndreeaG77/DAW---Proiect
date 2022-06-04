import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "../books/books/books.component";
import {ClientsComponent} from "../clients/clients/clients.component";
import {BookReviewsComponent} from "./book-reviews/book-reviews.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-reviews',
  },
  {
    path: 'book-reviews',
    component: BookReviewsComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookReviewsRoutingModule { }
