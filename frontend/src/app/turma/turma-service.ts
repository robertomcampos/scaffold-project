import { Injectable } from '@angular/core';
import { Turma } from './turma';
import { ApiClient, HandleApiError } from '../services/apiClient.service'
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IPaging, IPagingParams } from '../model/paginate.model';
import { toParams } from '../services/toParams';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError) { }

  get(params: IPagingParams): Observable<IPaging<Turma>> {
    const query = toParams(params);
    return this.apiClient.get(`/turma?${query}`)
    .pipe(
      tap(_ => console.log('listing classes')),
      catchError(this.handleApiError.handleError<IPaging<Turma>>('listing classess'))
    );
  }

  create(data: Turma): Observable<any> {
    return this.apiClient.post('/turma', data)
      .pipe(
        tap(_ => console.log('creating a class')),
        catchError(this.handleApiError.handleError<Turma>('creating a class'))
      );
  }
}
