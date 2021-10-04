import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NagivationBarComponent } from './nagivation-bar/nagivation-bar.component';
import { CreditCardListComponent } from './credit-card/credit-card-list/credit-card-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NagivationBarComponent, CreditCardListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
