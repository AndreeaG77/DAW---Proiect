import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {ClientComponent} from "./client/client.component";
import {BooksComponent} from "../books/books/books.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clients',
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'client/:id',
    component: ClientComponent,
  },
  {
    path: 'books',
    component: BooksComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
