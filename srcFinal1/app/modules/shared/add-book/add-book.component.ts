import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientsService} from "../../../services/clients.service";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public bookForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    author: new FormControl(''),
  });


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private booksService: BooksService,
    public  dialogRef: MatDialogRef<AddBookComponent>,
  ) {
    console.log(this.data);
  }

  get id(): AbstractControl {
    // @ts-ignore
    return this.bookForm.get('id');
  }

  get name(): AbstractControl {
    // @ts-ignore
    return this.bookForm.get('name');
  }

  get author(): AbstractControl {
    // @ts-ignore
    return this.bookForm.get('auhtor');
  }

  ngOnInit(): void {
  }

  public addBook(): void {
    this.booksService.addBook(this.bookForm.value).subscribe(
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
