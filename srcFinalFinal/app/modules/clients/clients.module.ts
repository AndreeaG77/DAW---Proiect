import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients/clients.component';
import {MaterialModule} from "../material/material.module";
import { ChildComponent } from './child/child.component';
import { ClientComponent } from './client/client.component';
import {MyPipePipe} from "../../my-pipe.pipe";


@NgModule({
  declarations: [
    ClientsComponent,
    ChildComponent,
    ClientComponent,
    MyPipePipe,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
  ],
  exports: [
    MyPipePipe,
  ]
})
export class ClientsModule { }
