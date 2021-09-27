import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';



@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionDetailsComponent,
    TransactionAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionModule { }
