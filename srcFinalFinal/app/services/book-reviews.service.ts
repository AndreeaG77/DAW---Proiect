import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookReviewsService {

  public url = 'https://localhost:7070/api/bookReviews';

  constructor(
    public http: HttpClient,
  ) { }

  public getReviews(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  public addReview(review): Observable<any> {
    return this.http.post(`${this.url}`, review);
  }

  public deleteReview(review): Observable<any> {
    const options = {
      headers: new HttpHeaders(),
      body: review
    };
    return this.http.delete(`${this.url}`, options);
  }
}
