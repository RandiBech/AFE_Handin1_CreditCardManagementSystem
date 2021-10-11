import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NagivationBarComponent } from './nagivation-bar/nagivation-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NagivationBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
