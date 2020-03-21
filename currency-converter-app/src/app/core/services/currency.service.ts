import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  availableCurrency = new BehaviorSubject<string[]>([]);
  baseRate = new BehaviorSubject<string>('EUR');
  constructor() { }

}
