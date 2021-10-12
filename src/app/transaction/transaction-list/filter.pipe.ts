//inspiration: https://dev.to/idrisrampurawala/creating-a-search-filter-in-angular-562d + slides from course

import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from 'src/app/transaction-type';

@Pipe({ name: 'appFilter' })

// Virker
export class FilterPipe implements PipeTransform {
  transform(items: Transaction[] | null, name: string): Transaction[] {
    if (!items) {
      return [];
    }
    if (!name) {
      return items;
    }
    let result: Transaction[] = items.filter((transaction) => {
      return transaction.credit_card.cardholder_name === name;
    });
    return result;
  }
}
