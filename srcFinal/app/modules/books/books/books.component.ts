import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {BooksService} from "../../../services/books.service";
import {AddBookComponent} from "../../shared/add-book/add-book.component";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser;
  public books = [];
  public displayedColumns = ['id', 'name', 'author', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private booksService: BooksService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.booksService.getBooks().subscribe(
      (result) => {
        console.log(result);
        this.books = result;
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

  public deleteBook(book): void {
    this.booksService.deleteBook(book).subscribe(
      (result) => {
        console.log(result);
        this.books = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(book?): void {
    const data = {
      book
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '750px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddBookComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.books = result;
      }
    });
  }

  public addNewBook(): void {
    this.openModal();
  }

  public goToClients(): void {
    this.router.navigate(['/clients']);
  }
}
