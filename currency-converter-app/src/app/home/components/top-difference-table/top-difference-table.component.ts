import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ComparisonRate } from '../../../shared/models/compare-rate.interface';

@Component({
  selector: 'app-top-difference-table',
  templateUrl: './top-difference-table.component.html',
  styleUrls: ['./top-difference-table.component.sass']
})
export class TopDifferenceTableComponent implements OnInit {

  private _rates: ComparisonRate[];
  @Input()
  set rates(value) {
    this._rates = value;
    if (this.rates && this._rates.length > 0) {
      this.dataSource = new MatTableDataSource(this.rates);

    }
  }

  get rates() {
    return this._rates;
  }

  displayedColumns = ['currency', 'difference', 'percentage'];
  dataSource: MatTableDataSource<ComparisonRate>;

  constructor() { }

  ngOnInit() {
  }

}
