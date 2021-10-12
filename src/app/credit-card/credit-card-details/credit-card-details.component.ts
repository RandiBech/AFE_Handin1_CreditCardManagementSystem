import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
    private transactionService: TransactionService,
    private navigationRouter: Router
  ) {
    this.Transactions$ = this.transactionService.getTransactions();
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(() => {
      this.getCard();
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCard(): void {
    this.creditCard = history.state;
  }

  deleteCard(): void {
    this.creditCardService.removeCard(this.creditCard).subscribe();
    this.navigationRouter.navigateByUrl('/home');
  }
}
