import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    TransactionAddComponent,
    TransactionListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
