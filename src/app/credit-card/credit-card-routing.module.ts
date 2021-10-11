import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';

const routes: Routes = [
  {path: '', component: CreditCardListComponent},
  {path: ':id', component: CreditCardDetailsComponent, data: {Card: 'some value'}}
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardRoutingModule { }
