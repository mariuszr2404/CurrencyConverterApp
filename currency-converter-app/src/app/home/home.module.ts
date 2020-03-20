import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HistoricalComponent } from './components/historical/historical.component';
import { TopDifferenceCurrencyComponent } from './components/top-difference-currency/top-difference-currency.component';
import { LastRatesComponent } from './components/last-rates/last-rates.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [HistoricalComponent, TopDifferenceCurrencyComponent, LastRatesComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
