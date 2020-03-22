import { Component, OnInit, OnDestroy } from '@angular/core';
import { currentDate, prevDate } from '../../../core/services/dateHelper';
import { ApiService } from 'src/app/core/services/api.service';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { YesterdayRate } from '../../../shared/models/yesterdayRates.interface';
import { compareRates } from 'src/app/core/services/trend';
import { ComparisonRate } from '../../../shared/models/compare-rate.interface';


@Component({
  selector: 'app-top-difference-currency',
  templateUrl: './top-difference-currency.component.html',
  styleUrls: ['./top-difference-currency.component.sass']
})
export class TopDifferenceCurrencyComponent implements OnInit, OnDestroy {

  private baseRate$: Subscription;
  private lastRates$: Subscription;
  ratesData: {
    increase: ComparisonRate[];
    decrease: ComparisonRate[];
  } = { increase: [], decrease: [] };

  constructor(
    private apiService: ApiService,
    private currencyService: CurrencyService
  ) {
    this.baseRate$ = this.currencyService.baseRate.subscribe(rate => {
      if (rate) { this.getExchangeRates(rate); }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.baseRate$.unsubscribe();
    this.lastRates$.unsubscribe();
  }

  private getExchangeRates(rate?: string) {
    this.lastRates$ = this.apiService
      .getYesterday('history', prevDate(7, 'days'), currentDate, rate)
      .pipe(
        map((rates: YesterdayRate) => {
            const mappedRates = Object.keys(rates.today).map(currency => {
            const today = rates.today[currency];
            const yesterday = rates.yesterday[currency];
            const diff = Number((today - yesterday).toFixed(4));
            const diffPercentage = (diff / yesterday).toFixed(4);

            return {
              currency,
              diff,
              diffPercentage,
              trend: compareRates(today, yesterday)
            };
          });
            const groupRates = this.groupByTrend(mappedRates, 'trend');
            const sortDecreaseRates = this.sortRatesByPercentage(groupRates.DECREASE);
            const sortIncreaseRates = this.sortRatesByPercentage(groupRates.INCREASE);
            const increase = this.getNfirstElement(sortIncreaseRates, 5);
            const decrease = this.getNlastElement(sortDecreaseRates, 5);
            return { increase, decrease };
        })
      ).subscribe((res) => {
        return this.ratesData = res;
      } );
  }

  // https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
  private groupByTrend = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }),
    {},
  )

  // sort ASC
  private sortRatesByPercentage = (arr: any[]) => {
    return arr.sort((a, b) => {
      let comparison = 0;
      if (a.diffPercentage > b.diffPercentage) {
        comparison = 1;
      } else if (a.diffPercentage < b.diffPercentage) {
        comparison = -1;
      }
      return comparison;
    });
  }

  private getNlastElement = (arr: any[], n: number) => {
    return arr.slice(Math.max(arr.length - n, 0));
  }

  private getNfirstElement = (arr: any[], n: number) => {
    return arr.slice(0, n);
  }

}
