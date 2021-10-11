import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
},
{
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
