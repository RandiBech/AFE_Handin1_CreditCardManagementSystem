import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { Card } from 'src/app/card-type';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
