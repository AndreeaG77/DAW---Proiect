import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {ClientsService} from "../../../services/clients.service";
import {AddEditClientComponent} from "../../shared/add-edit-client/add-edit-client.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

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
  public displayedColumns = ['id', 'firstName', 'lastName', 'edit', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private clientsService: ClientsService,
    public dialog: MatDialog,
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

  public deleteClient(client): void {
    this.clientsService.deleteClient(client).subscribe(
      (result) => {
        console.log(result);
        this.clients = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(client?): void {
    const data = {
      client
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditClientComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result) {
        this.clients = result;
      }
    });
  }

  public addNewClient(): void {
    this.openModal();
  }

  public editClient(client): void {
    this.openModal(client);
  }

}
