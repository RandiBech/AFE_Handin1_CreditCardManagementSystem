import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  searchText = '';
  creditCards$: Observable<any[] | undefined>;
  transactions$: Observable<Transaction[]>;

  constructor(
    private router: Router,
    private cardService: CreditCardService,
    private transactionService: TransactionService
  ) {
    this.transactions$ = this.transactionService.getTransactions();
    this.creditCards$ = this.cardService.getCards();
  }

  OnDelete(transaction: Transaction): void {
    this.transactionService.deleteTransaction(transaction.uid).subscribe((_) => {
      this.router.navigate(['/transaction']);
    });
  }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.getTransactions();
  }
}
