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

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.rootUrl}/credit_cards`);
  }

  deleteTransaction(transaction: Transaction): Observable<Transaction[]> {
    return this.http.delete<Transaction[]>(
      `${this.rootUrl}/transactions/${transaction}`
    );  }
}
