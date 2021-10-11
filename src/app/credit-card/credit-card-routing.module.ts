import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';

const routes: Routes = [
  {path: '', component: CreditCardListComponent},
  {
    path: 'addCreditCard',
    component: CreditCardAddComponent
  },
  {path: ':id', component: CreditCardDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
