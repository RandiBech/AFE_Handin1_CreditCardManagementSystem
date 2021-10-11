import { Component, EventEmitter, Inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap , Router} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CreditCardService } from 'src/app/credit-card.service';
import {Card} from 'src/app/card-type';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit, OnDestroy {

  creditCard!: Card;
  @Output() deleteRequest = new EventEmitter<Card>();
  sub!: Subscription;
  

  constructor(private route: ActivatedRoute) 
  {  }

  ngOnInit(): void 
  {  
    this.sub = this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.getCard();
    }); 
    
    console.log('state', history.state);
    console.log('creditcard: ', this.creditCard);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getCard(): void {
    this.creditCard = history.state;
  }
}
