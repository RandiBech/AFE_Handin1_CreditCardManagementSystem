import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction-type';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  rootUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}/transactions`);
  }

  addTransaction(request: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.rootUrl}/transactions`, request);
  }

  deleteTransaction(uid: string): Observable<any> {
    return this.http.delete<any>(`${this.rootUrl}/transactions/${uid}`);
  }
}
