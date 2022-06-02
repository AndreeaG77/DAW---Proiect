import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
  ) { }

  get username(): AbstractControl {
    return <AbstractControl>this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.registerForm.get('password');
  }

  ngOnInit() {
  }

  public register(): void {
    console.log(this.registerForm.value);
    this.router.navigate(['/login']);
  }

}
