import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/transaction-type';

@Pipe({
  name: 'creditCardFilter',
})
export class CreditCardFilterPipe implements PipeTransform {
  transform(items: Transaction[] | null, number: string): Transaction[] {
    if (!items) {
      return [];
    }
    if (!number) {
      return items;
    }
    let result: Transaction[] = items.filter((transaction) => {
      return transaction.credit_card.card_number === number;
    });
    return result;
  }
}
