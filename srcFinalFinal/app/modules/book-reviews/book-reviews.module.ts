import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReviewsRoutingModule } from './book-reviews-routing.module';
import { BookReviewsComponent } from './book-reviews/book-reviews.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    BookReviewsComponent
  ],
  imports: [
    CommonModule,
    BookReviewsRoutingModule,
    MaterialModule,
  ]
})
export class BookReviewsModule { }
