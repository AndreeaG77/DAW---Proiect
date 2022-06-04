import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientsService} from "../../../services/clients.service";
import {BookReviewsService} from "../../../services/book-reviews.service";

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  public reviewForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    review: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private bookReviewsService: BookReviewsService,
    public  dialogRef: MatDialogRef<AddReviewComponent>,
  ) {
    console.log(this.data);
  }

  get id(): AbstractControl {
    // @ts-ignore
    return this.reviewForm.get('id');
  }

  get review(): AbstractControl {
    // @ts-ignore
    return this.reviewForm.get('review');
  }

  ngOnInit(): void {
  }

  public addReview(): void {
    this.bookReviewsService.addReview(this.reviewForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
