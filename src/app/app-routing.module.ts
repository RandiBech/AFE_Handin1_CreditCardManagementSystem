import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'transaction',
  loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule),
},{
  path: 'creditcards',
  loadChildren: () => import('./credit-card/credit-card.module').then(m => m.CreditCardModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
