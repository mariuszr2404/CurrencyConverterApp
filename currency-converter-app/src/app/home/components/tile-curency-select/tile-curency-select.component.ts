import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { Subscription } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-tile-curency-select',
  templateUrl: './tile-curency-select.component.html',
  styleUrls: ['./tile-curency-select.component.sass']
})
export class TileCurencySelectComponent implements OnInit, OnDestroy {

  private rates$: Subscription;
  currencyList = [];
  baseCurrency = 'EUR';

  constructor(private currencyService: CurrencyService) {
    this.currencyService.availableCurrency.subscribe(val => {
      this.currencyList = val;
      if (this.currencyList.length === 0) {
        this.currencyList = JSON.parse(localStorage.getItem('currencies'));
      }
    });
  }

  setBaseCurrency(currency: string) {
    this.baseCurrency = currency;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.rates$.unsubscribe();
  }

  changeBaseRate(event: MatSelectChange) {
    this.currencyService.baseRate.next(event.value);
  }

}
