import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {ClientsService} from "../../../services/clients.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser;
  public parentMessage = 'message from parent';
  public clients = [];
  public displayedColumns = ['id', 'name', 'age'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private clientsService: ClientsService,
  ) { }

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.clientsService.getClients().subscribe(
      (result) => {
        console.log(result);
        this.clients = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/login']);
  }

  public receiveMessage(event): void {
    console.log(event);
  }
}
