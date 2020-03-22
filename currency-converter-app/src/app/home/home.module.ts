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
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TopDifferenceTableComponent } from './components/top-difference-table/top-difference-table.component';

@NgModule({
  declarations: [
    HistoricalComponent,
    TopDifferenceCurrencyComponent,
    LastRatesComponent,
    PageNotFoundComponent,
    TileCurencySelectComponent,
    TopDifferenceTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    MaterialDesignModule,
    NgxChartsModule
  ],
  exports: [
    TileCurencySelectComponent
  ]
})
export class HomeModule { }
