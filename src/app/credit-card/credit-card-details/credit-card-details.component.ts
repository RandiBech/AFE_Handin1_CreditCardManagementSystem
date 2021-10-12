import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { CreditCardService } from 'src/app/credit-card.service';
import { Card } from 'src/app/card-type';
import { Transaction } from 'src/app/transaction-type';
import { TransactionService } from 'src/app/transaction.service';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit, OnDestroy {
  @Input() creditCard!: Card;
  @Output() deleteRequest = new EventEmitter<Card>();
  sub!: Subscription;
  Transactions$: Observable<Transaction[]>;

  constructor(
    private route: ActivatedRoute,
    private creditCardService: CreditCardService,
    private transactionService: TransactionService
  ) {
    this.Transactions$ = this.transactionService.getTransactions();
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.getCard();
    });

    console.log('state', history.state);
    console.log('creditcard: ', this.creditCard);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCard(): void {
    this.creditCard = history.state;
  }

  deleteCard(): void {
    console.log('delete card request');
    // this.deleteRequest.emit(this.creditCard);
    this.creditCardService.removeCard(this.creditCard).subscribe(); // does not work
    console.log('card deleted');
  }
}
