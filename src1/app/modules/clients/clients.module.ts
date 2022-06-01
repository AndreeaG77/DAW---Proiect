import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import {MaterialModule} from "../material/material.module";
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
  ]
})
export class ClientsModule { }
