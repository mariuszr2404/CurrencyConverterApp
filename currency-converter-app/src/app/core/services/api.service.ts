import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError, of} from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  getYesterday(path: string, start: string, end: string, base = 'EUR'): Observable<any> {
    let params = new HttpParams({});
    params = params.append('start_at', start);
    params = params.append('end_at', end);
    params = params.append('base', base);
    return this.http.get(`${environment.api_url}${path}`, { params })
    .pipe(switchMap((res: any) => {
      // set as yesterday nearest next day
       const [today, yesterday] = Object.keys(res.rates).sort().reverse();
       return of({
        today: res.rates[today],
        yesterday: res.rates[yesterday]
       });
    }),
    catchError(this.formatErrors));
  }
}
