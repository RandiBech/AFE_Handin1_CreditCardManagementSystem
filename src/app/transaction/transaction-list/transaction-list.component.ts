import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { Card } from 'src/app/card-type';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  creditCards$: Observable<Card[]>;
  transactions$: Observable<any[]>;
  error = '';
  // transactions$: Observable<Transaction[]> | null = null;

  constructor(private cardService: CreditCardService, private transactionService: TransactionService) {
    this.transactions$ = this.transactionService.getTransactions();
    this.creditCards$ = this.cardService.getCards();
  }

  selectedTransaction?: Transaction;
  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions();
  }
}
