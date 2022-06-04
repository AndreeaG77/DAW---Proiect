import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HoverButtonDirective} from "../../hover-button.directive";
import { AddBookComponent } from './add-book/add-book.component';
import { AddReviewComponent } from './add-review/add-review.component';



@NgModule({
  declarations: [
    AddEditClientComponent,
    HoverButtonDirective,
    AddBookComponent,
    AddReviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditClientComponent,
    AddBookComponent,
    AddReviewComponent,
  ],
  exports: [
    HoverButtonDirective,
  ]
})
export class SharedModule { }
