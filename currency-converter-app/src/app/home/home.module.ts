import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HistoricalComponent } from './components/historical/historical.component';
import { TopDifferenceCurrencyComponent } from './components/top-difference-currency/top-difference-currency.component';
import { LastRatesComponent } from './components/last-rates/last-rates.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TileCurencySelectComponent } from './components/tile-curency-select/tile-curency-select.component';
import { MaterialDesignModule } from '../material-components/material-design.module';

@NgModule({
  declarations: [
    HistoricalComponent,
    TopDifferenceCurrencyComponent,
    LastRatesComponent,
    PageNotFoundComponent,
    TileCurencySelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialDesignModule
  ],
  exports: [
    TileCurencySelectComponent
  ]
})
export class HomeModule { }
