import { Injectable } from '@angular/core';
import { Escola } from './escola';
import { ApiClient, HandleApiError } from '../services/apiClient.service'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IPaging, IPagingParams } from '../model/paginate.model';
import { toParams } from '../services/toParams';

@Injectable({
  providedIn: 'root',
})
export class EscolaService {
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError) { }

  getAll(): Observable<Escola[]> {
    return this.apiClient.get(`/escola/all`)
      .pipe(
        tap(_ => console.log('listing classes')),
        catchError(this.handleApiError.handleError<IPaging<Escola[]>>('listing classess'))
      );
  }

  get(params: IPagingParams): Observable<IPaging<Escola>> {
    const query = toParams(params);
    return this.apiClient.get(`/escola?${query}`)
      .pipe(
        tap(_ => console.log('listing classes')),
        catchError(this.handleApiError.handleError<IPaging<Escola>>('listing classess'))
      );
  }

  create(data: Escola): Observable<any> {
    return this.apiClient.post('/escola', data)
      .pipe(
        tap(_ => console.log('creating escola')),
        catchError(this.handleApiError.handleError<Escola>('creating escola'))
      );
  }
}
