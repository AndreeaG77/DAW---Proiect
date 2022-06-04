import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {ClientsComponent} from "../clients/clients/clients.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
  },
  {
    path: 'books',
    component: BooksComponent
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
export class BooksRoutingModule { }
