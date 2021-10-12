import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Card} from '../../card-type';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  mobileView = false;
  creditcards$: Observable<Card[]>;
  constructor(private service: CreditCardService) {
    this.creditcards$ = service.getCards();
  }

  ngOnInit(): void {
    //inspiration: https://stackoverflow.com/questions/47034573/ngif-hide-some-content-on-mobile-screen-angular-4/50845587
    if (window.screen.width === 360) {
      this.mobileView = true;
    }
  }

}
