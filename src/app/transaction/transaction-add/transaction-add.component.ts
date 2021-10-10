import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Transaction } from 'src/app/transaction-type';
import { Card } from '../../card-type';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss']
})
export class TransactionAddComponent implements OnInit {

  creditCards$: Observable<Card[]>;

  constructor(private formBuilder: FormBuilder, creditCardService: CreditCardService) {
    this.creditCards$ = creditCardService.getCards();
   }

  ngOnInit(): void {
  }

  transactionForm = this.formBuilder.group({
    credit_card: [null],
    amount: [0, Validators.required],
    currency: ['', Validators.required],
    comment: [''],
    date: ['', Validators.required]
  })

  get transactionFormControl() {
    return this.transactionForm.controls;
  }

  onSubmit() {
    var unixDate = new Date(this.transactionForm.value.date).getTime() / 1000
    var request: Transaction = {
      credit_card: this.transactionForm.value.credit_card,
      amount: this.transactionForm.value.amount,
      currency: this.transactionForm.value.currency,
      date: unixDate,
      comment: this.transactionForm.value.comment
    }
    console.log('transaction', request)
  }

}
