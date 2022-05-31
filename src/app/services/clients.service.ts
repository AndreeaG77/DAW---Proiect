import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  public url = 'https://localhost:44370/api/clients';

  constructor(
    public hhtp: HttpClient,
  ) { }

  public getClients(): Observable<any> {
    return this.hhtp.get(`${this.url}`);
  }
}
