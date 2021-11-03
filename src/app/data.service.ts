import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface ICity {
  name: string;
  country: string;
  subcountry: string;
  geonameid: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected URL = 'http://localhost:3000/api/search/';
  protected limitResults = 10;
  constructor(private http: HttpClient) { }

  searchCities(query: string): Observable<ICity[]>{
    return this.http.post<{payload: Array<ICity>}>(this.URL, {name: query, limit: this.limitResults},
      { headers: this.getHttpHeaders()}).pipe(
      map(data => data.payload)
    );
  }

  getHttpHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin', '*');

    return headers;
  }
}
