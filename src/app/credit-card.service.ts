import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction-type';
import { Card } from './card-type';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.rootUrl}/credit_cards`);
  }

  deleteTransaction(uid: string): Observable<Transaction[]> {
    return this.http.delete<Transaction[]>(
      `${this.rootUrl}/transactions/${uid}`
    );
  }
  addCard(request: Card): Observable<Card> {
    return this.http.post<Card>(`${this.rootUrl}/credit_cards`, request);
  }
}
