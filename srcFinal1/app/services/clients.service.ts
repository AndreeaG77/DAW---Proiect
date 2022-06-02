import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  public url = 'https://localhost:7070/api/clients';

  constructor(
    public http: HttpClient,
  ) { }

  public getClients(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public getClientById(id): Observable<any> {
    return this.http.get(`${this.url}/byId/${id}`);
  }

  public addClient(client): Observable<any> {
    return this.http.post(`${this.url}/fromBody`, client);
  }

  public editClient(client): Observable<any> {
    return this.http.put(`${this.url}`, client);
  }

  public deleteClient(client): Observable<any> {
    const options = {
      headers: new HttpHeaders(),
      body: client
    };
    return this.http.delete(`${this.url}`, options);
  }
}
