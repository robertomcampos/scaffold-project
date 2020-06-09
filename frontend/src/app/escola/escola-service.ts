import { Injectable } from '@angular/core';
import { Escola } from './escola';
import { ApiClient } from '../services/apiClient.service'
import { HandleApiError } from '../services/handleApiError.service'
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
        catchError(this.handleApiError.handleError<Escola[]>('listing classess'))
      );
  }

  get(params: IPagingParams): Observable<IPaging<Escola>> {
    const query = toParams(params);
    return this.apiClient.get(`/escola?${query}`)
      .pipe(
        catchError(this.handleApiError.handleError<IPaging<Escola>>('listing classess'))
      );
  }

  create(data: Escola): Observable<any> {
    return this.apiClient.post('/escola', data)
      .pipe(
        catchError(this.handleApiError.handleError<Escola>('creating escola'))
      );
  }

  removeAll(ids: string[]): Observable<any> {
    return this.apiClient.deleteAll('/escola/all', ids)
      .pipe(
        catchError(this.handleApiError.handleError<Escola>('creating escola'))
      );
  }

  remove(id: string): Observable<any> {
    return this.apiClient.deleteAll('/escola', id)
      .pipe(
        catchError(this.handleApiError.handleError<Escola>('creating escola'))
      );
  }
}
