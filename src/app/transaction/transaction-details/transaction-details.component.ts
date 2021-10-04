import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { Card } from 'src/app/card-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit {
  @Input() transaction?: Transaction;

  // transaction$: Observable<Transaction>;

  constructor(
    private creditCardService: CreditCardService,
    route: ActivatedRoute
  ) {
    const id = route.snapshot.paramMap.get('id');
    // this.transaction$ = this.creditCardService.getTransaction(
    //   id ? parseInt(id) : 1);
  }

  ngOnInit(): void {
    console.log('Details', this.transaction);
  }
}
