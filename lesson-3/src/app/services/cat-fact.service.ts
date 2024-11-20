import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  private BASE_URL = 'https://catfact.ninja';

  constructor(private httpClient: HttpClient) {}

  public getFacts(limit: number): Observable<any> {
    return this.httpClient.get(`${this.BASE_URL}/facts?limit=${limit}`);
  }
}
