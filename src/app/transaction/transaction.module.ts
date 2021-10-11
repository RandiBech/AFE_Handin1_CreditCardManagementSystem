import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/transaction/transaction-list/filter.pipe';

@NgModule({
  declarations: [TransactionAddComponent, TransactionListComponent, FilterPipe],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TransactionModule {}
