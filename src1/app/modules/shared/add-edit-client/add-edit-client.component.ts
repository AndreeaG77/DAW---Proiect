import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {ClientsService} from "../../../services/clients.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.scss']
})
export class AddEditClientComponent implements OnInit {

  public clientForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    fName: new FormControl(''),
    lName: new FormControl(''),
  });

  public title;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private clientsService: ClientsService,
    public  dialogRef: MatDialogRef<AddEditClientComponent>,
  ) {
    console.log(this.data);
    if (data.client) {
      this.title = 'Edit Client';
      this.clientForm.patchValue(this.data.client);
    } else{
      this.title = 'Add Client';
    }
  }

  get id(): AbstractControl {
    // @ts-ignore
    return this.clientForm.get('id');
  }

  get lName(): AbstractControl {
    // @ts-ignore
    return this.clientForm.get('fName');
  }

  get fName(): AbstractControl {
    // @ts-ignore
    return this.clientForm.get('lName');
  }

  ngOnInit(): void {
  }

  public addClient(): void {
    this.clientsService.addClient(this.clientForm.value).subscribe(
      (result) => {
        console.log(result);
        this.dialogRef.close(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public editClient(): void {
    this.clientsService.editClient(this.clientForm.value).subscribe(
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
