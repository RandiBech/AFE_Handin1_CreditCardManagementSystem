import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/card-type';
import { Transaction } from 'src/app/transaction-type';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  @Input() card!: Card;
  transactions$: Observable<Transaction[]>;
  creditCardFilter$: Observable<Transaction[]> | null;
  credit_card!: Card;

  constructor(private cardService: TransactionService) {
    this.transactions$ = this.cardService.getTransactions();
    this.creditCardFilter$ = null;
  }

  ngOnInit(): void {
    console.log(this.card);
  }
}
