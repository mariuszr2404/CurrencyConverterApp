import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile-curency-select',
  templateUrl: './tile-curency-select.component.html',
  styleUrls: ['./tile-curency-select.component.sass']
})
export class TileCurencySelectComponent implements OnInit {

  currencyList = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY',
  'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'HRK',
  'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD',
  'MXN', 'ILS', 'GBP', 'KRW', 'MYR', 'EUR'
  ];

  baseCurrency = this.currencyList[0];

  constructor() { }

  ngOnInit() {
  }

}
