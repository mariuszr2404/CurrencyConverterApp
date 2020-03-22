import { Component, OnInit, OnDestroy } from '@angular/core';
import { prevDate, currentDate } from 'src/app/core/services/dateHelper';
import { ApiService } from 'src/app/core/services/api.service';
import { CurrencyService } from 'src/app/core/services/currency.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.sass']
})

export class HistoricalComponent implements OnInit, OnDestroy {

  private baseRate$: Subscription;
  baseCurrency = '';
  secondaryCurrency = 'EUR';
  chartData: [];

  view: any[] = [];

  showYAxis = true;
  showXAxis = true;
  gradient = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = '';
  colorScheme = {
    domain: ['#5AA454']
  };

  isRequestLoadSucess = false;

  constructor(
    private apiService: ApiService,
    private currencyService: CurrencyService,
    private router: ActivatedRoute
  ) {
    this.view = [innerWidth / 2, 500];
    this.baseRate$ = this.currencyService.baseRate.subscribe(rate => {
      this.baseCurrency = rate;
      this.get30LastDaysCompareCurrencies();
      // if params equals null user clicked page2 nav button, compare BASE TO EUR
      if (!this.secondaryCurrency) {
        this.secondaryCurrency = this.baseCurrency;
      }
      if (this.yAxisLabel === '') {
        this.yAxisLabel = this.baseCurrency;
      }
    });
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      if (params.get('secondary')) {
        this.secondaryCurrency = params.get('secondary');
      }
    });
    this.get30LastDaysCompareCurrencies();
  }

  ngOnDestroy() {
    this.baseRate$.unsubscribe();
  }

  private get30LastDaysCompareCurrencies() {
    this.apiService
      .getLast30Days('history', prevDate(30, 'days'), currentDate, this.baseCurrency, this.secondaryCurrency)
      .pipe(
        map(this.modifyDataForChart)
      )
      .subscribe((res: []) => {
        this.chartData = res;
        this.isRequestLoadSucess = true;
      }, err => {
        this.isRequestLoadSucess = false;
      });
  }

  private modifyDataForChart(res) {
    let data = [];
    data = Object.keys(res).sort().map(key => {
      return {name: key, value: Object.values(res[key]).join()};
    });
    return data;
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
}
