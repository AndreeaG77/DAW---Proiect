import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {ClientsService} from "../../../services/clients.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public subscription: Subscription;
  public id;
  public client = {
    id: 0,
    firstName: 'none',
    lastName: 'none',
  };

  constructor(
    private router: ActivatedRoute,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.router.params.subscribe(params => {
      this.id = params['id'];
      if(this.id) {
        this.getClient();
      }
    });
  }

  public getClient(): void{
    this.clientsService.getClientById(this.id).subscribe(
      (result) => {
        console.log(result);
        this.client = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
