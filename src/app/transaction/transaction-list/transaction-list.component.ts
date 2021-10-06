import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { Card } from 'src/app/card-type';

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

  constructor(private cardService: CreditCardService, private router: Router) {
    this.transactions$ = this.cardService.getTransactions();
    this.creditCards$ = this.cardService.getCards();
  }

  OnDelete(transaction: Transaction): void {
    console.log("Delete is called")
    this.cardService.deleteTransaction(transaction).subscribe((_) => {
      this.router.navigate(['/transaction']);
    });
  }

  onFilter(): void {
    // TODO
  }

  ngOnInit(): void {
    this.transactions$ = this.cardService.getTransactions();
  }
}
