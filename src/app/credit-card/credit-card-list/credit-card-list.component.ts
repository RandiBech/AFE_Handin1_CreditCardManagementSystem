import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card.service';
import { Card} from '../../card-type';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss']
})
export class CreditCardListComponent implements OnInit {

  creditcards$: Observable<Card[]>
  constructor(private service: CreditCardService) { 
    this.creditcards$ = service.getCards();
  }

  ngOnInit(): void {
  }

}
