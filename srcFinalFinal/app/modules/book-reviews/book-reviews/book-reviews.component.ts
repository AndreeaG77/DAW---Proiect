import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {BooksService} from "../../../services/books.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddBookComponent} from "../../shared/add-book/add-book.component";
import {BookReviewsService} from "../../../services/book-reviews.service";
import {AddReviewComponent} from "../../shared/add-review/add-review.component";

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser;
  public reviews = [];
  public displayedColumns = ['id', 'review', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private bookReviewsService: BookReviewsService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.bookReviewsService.getReviews().subscribe(
      (result) => {
        console.log(result);
        this.reviews = result;
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

  public deleteReview(review): void {
    this.bookReviewsService.deleteReview(review).subscribe(
      (result) => {
        console.log(result);
        this.reviews = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public openModal(review?): void {
    const data = {
      review
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '750px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddReviewComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.reviews = result;
      }
    });
  }

  public addNewReview(): void {
    this.openModal();
  }

  public goToClients(): void {
    this.router.navigate(['/clients']);
  }

}
