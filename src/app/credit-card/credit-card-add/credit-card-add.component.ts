import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CreditCardService } from 'src/app/credit-card.service';
import { Card } from '../../card-type';

@Component({
  selector: 'app-credit-card-add',
  templateUrl: './credit-card-add.component.html',
  styleUrls: ['./credit-card-add.component.scss']
})
export class CreditCardAddComponent implements OnInit {

  // creditCardForm: FormBuilder;

  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) { }

  ngOnInit(): void {
  }

  creditCardForm = this.formBuilder.group({
    cardNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$"), this.invalidCardNumber]],
    cardholder_name: ['', Validators.required],
    cscCode: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(3), Validators.minLength(3)]],
    expirationDate: this.formBuilder.group({
      expiration_date_month: [0],
      expiration_date_year: [0],
    }, { validators: this.invalidExpirationDate, updateOn: 'change'}),
    issuer: ['']
  })

  get creditCardFormControl() {
    return this.creditCardForm.controls;
  }

  get expirationDate(): FormControl {
    return this.creditCardForm.get('expirationDate') as FormControl;
  }

  get expirationDateMonth(): FormControl {
    return this.creditCardForm.get('expiration_date_month') as FormControl;
  }

  get expirationDateYear(): FormControl {
    return this.creditCardForm.get('expiration_date_year') as FormControl;
  }
  get cardNumber(): FormControl {
    return this.creditCardForm.get('cardNumber') as FormControl;
  }

  get cscCode(): FormControl {
    return this.creditCardForm.get('cscCode') as FormControl;
  }

  invalidCardNumber(group: FormControl): ValidationErrors | null {
    //problem her med at value er undefined!!
    var numberLength = group.get('cardNumber')?.value.length;
    console.log('hej', numberLength < 7 && numberLength > 16, group.get('cardNumber')?.value)
    return numberLength < 7 || numberLength > 16 ? {invalid_length: 'The card number must be between 7 to 16 digits long'} : null;
  }

  invalidExpirationDate(group: AbstractControl): ValidationErrors | null {
    var month = group.get('expiration_date_month')?.value;
    var year = group.get('expiration_date_year')?.value;
    var invalidMonth = month < 1 || month > 12;
    var invalidYear  = year < 1 || year > 31;
    return invalidMonth || invalidYear ? {invalid_date: 'The date must be an existing date. Latest year: 31'} : null;
  }

  async onSubmit() {
    var request: Card = {
      card_number: this.creditCardForm.value.cardNumber,
      cardholder_name: this.creditCardForm.value.cardholder_name,
      expiration_date_month: this.creditCardForm.value.expirationDate.expiration_date_month,
      expiration_date_year: this.creditCardForm.value.expirationDate.expiration_date_year,
      csc_code: this.creditCardForm.value.cscCode,
      issuer: this.creditCardForm.value.issuer
    }
    console.log('submit', request)

    await this.creditCardService.addCard(request);
  }

}
