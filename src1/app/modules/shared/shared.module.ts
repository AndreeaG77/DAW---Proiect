import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditClientComponent } from './add-edit-client/add-edit-client.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddEditClientComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditClientComponent
  ]
})
export class SharedModule { }
