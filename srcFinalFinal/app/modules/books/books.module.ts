import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import {MaterialModule} from "../material/material.module";
import {BooksComponent} from "./books/books.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    BooksComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
  ]
})
export class BooksModule { }
