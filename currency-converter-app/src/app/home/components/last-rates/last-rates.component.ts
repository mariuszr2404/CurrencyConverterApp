import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-last-rates',
  templateUrl: './last-rates.component.html',
  styleUrls: ['./last-rates.component.sass']
})
export class LastRatesComponent implements OnInit {

  constructor(private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.get('latest').subscribe(res =>
      console.log(res));
  }

}
