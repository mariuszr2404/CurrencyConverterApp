import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricalComponent } from './components/historical/historical.component';
import { TopDifferenceCurrencyComponent } from './components/top-difference-currency/top-difference-currency.component';
import { LastRatesComponent } from './components/last-rates/last-rates.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'lastRates', component: LastRatesComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'topDiff', component: TopDifferenceCurrencyComponent },
  { path: '',
    redirectTo: '/lastRates',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
