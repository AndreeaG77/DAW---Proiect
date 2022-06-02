import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public url = 'https://localhost:7070/api/books';

  constructor(
    public http: HttpClient,
  ) { }

  public getBooks(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public addBook(book): Observable<any> {
    return this.http.post(`${this.url}`, book);
  }

  public deleteBook(book): Observable<any> {
    const options = {
      headers: new HttpHeaders(),
      body: book
    };
    return this.http.delete(`${this.url}`, options);
  }
}
