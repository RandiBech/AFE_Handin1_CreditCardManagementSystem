import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NagivationBarComponent } from './nagivation-bar/nagivation-bar.component';
import { CreditCardListComponent } from './credit-card/credit-card-list/credit-card-list.component';
import { CreditCardModule } from './credit-card/credit-card.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NagivationBarComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
