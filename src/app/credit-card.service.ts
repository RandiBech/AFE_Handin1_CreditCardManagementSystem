import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Transaction } from './transaction-type';
import { Card } from './card-type';
import { catchError, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.rootUrl}/credit_cards`);
  }

  addCard(request: Card): Observable<Card> {
    return this.http.post<Card>(`${this.rootUrl}/credit_cards`, request);
  }
  
  removeCard(request: Card): Observable<unknown> {
    console.log('deleting card...'); 
    const options = {
      params: new HttpParams().set('card_number', request.card_number )
    }; 

    return this.http.delete<Card>(`${this.rootUrl}/credit_cards/${request.card_number}`, options).pipe(
      catchError(this.handleError)
    ); 
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
