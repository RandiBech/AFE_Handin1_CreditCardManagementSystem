import { Card } from './card-type';

export interface Transaction {
  credit_card: Card;
  amount: number;
  currency: string;
  comment: string;
  date: number;
}
