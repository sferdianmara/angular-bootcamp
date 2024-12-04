import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {CatFactApiResponse, FactInfo} from './cat-fact-api-response';

@Injectable({
  providedIn: 'root'
})
export class CatFactService {

  private BASE_URL = 'https://catfact.ninja';

  constructor(private httpClient: HttpClient) {}

  public getFacts(): Observable<string[]> {
    return this.httpClient.get<CatFactApiResponse>(`${this.BASE_URL}/facts?limit=5`).pipe(
      map((res: CatFactApiResponse) => res.data?.map((factInfo: FactInfo) => factInfo.fact) ?? [])
    );
  }

  public getFact(id: number): Observable<string | undefined> {
    return this.getFacts().pipe(map(facts => facts.at(id)));
  }
}
