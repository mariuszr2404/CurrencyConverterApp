import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { currentDate, prevDate } from '../../../core/services/dateHelper';
import { YesterdayRate } from '../../../shared/models/yesterdayRates.interface';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RateCompare } from 'src/app/shared/models/RateCompare.enum';
import { LastRates } from '../../../shared/models/lastRates.interface';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-last-rates',
  templateUrl: './last-rates.component.html',
  styleUrls: ['./last-rates.component.sass']
})
export class LastRatesComponent implements OnInit, OnDestroy {

  private lastRates$: Subscription;
  private baseRate$: Subscription;
  dataSource: MatTableDataSource<LastRates>;
  displayedColumns = ['currency', 'spot', 'trend', 'chart'];
  isLoadingRates = false;
  errorMessage = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private apiService: ApiService,
    private currencyService: CurrencyService
  ) {
    this.baseRate$ = this.currencyService.baseRate.subscribe(rate => {
      if (rate) { this.getExchangeRate(rate); }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.lastRates$.unsubscribe();
    this.baseRate$.unsubscribe();
  }

  private getExchangeRate(rate?: string) {
    this.lastRates$ = this.apiService
      .getYesterday('history', prevDate(7, 'days'), currentDate, rate)
      .pipe(
        map((rates: YesterdayRate): LastRates[] => {
          return Object.keys(rates.today).map(currency => ({
            currency,
            spot: rates.today[currency],
            trend: this.compareRates(rates.today[currency], rates.yesterday[currency])
          }));
        })
      ).subscribe(this.updateState, this.handleError);
  }

  private updateState = (rates: LastRates[]) => {
    this.isLoadingRates = true;
    const availableCurrency = ['EUR'];
    rates.forEach((rate) => availableCurrency.push(rate.currency));
    this.currencyService.availableCurrency.next(availableCurrency);
    this.dataSource = new MatTableDataSource(rates);
    this.dataSource.paginator = this.paginator;
  }

  private handleError = () => {
    this.errorMessage = 'Sorry could not load rates, please try again !!!';
  }

  private compareRates(today: number, yesterday: number) {
    if (today > yesterday) {
      return RateCompare.INCREASE;
    } else if (today < yesterday) {
      return RateCompare.DECREASE;
    }
    return RateCompare.EQUAL;
  }

  getIcon(trend: RateCompare) {
    if (trend === RateCompare.INCREASE) {
      return 'trending_up';
    } else if (trend === RateCompare.DECREASE) {
      return 'trending_down';
    }
    return 'trending_flat';
  }

}
