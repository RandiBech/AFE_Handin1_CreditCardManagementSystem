import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreditCardListComponent,
    CreditCardDetailsComponent,
    CreditCardAddComponent
  ],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CreditCardListComponent
  ]
})
export class CreditCardModule { }
