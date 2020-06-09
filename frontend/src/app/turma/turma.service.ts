import { Injectable } from '@angular/core';
import { ITurmaRequest, ITurmaResponse } from './turma';
import { ApiClient } from '../services/apiClient.service';
import { HandleApiError } from '../services/handleApiError.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPaging, IPagingParams } from '../model/paginate.model';
import { toParams } from '../services/toParams';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError) { }

  get(params: IPagingParams): Observable<IPaging<ITurmaRequest>> {
    const query = toParams(params);
    return this.apiClient.get(`/turma?${query}`)
      .pipe(
        catchError(this.handleApiError.handleError<IPaging<ITurmaRequest>>())
      );
  }

  create(data: ITurmaResponse): Observable<any> {
    return this.apiClient.post('/turma', data)
      .pipe(
        catchError(this.handleApiError.handleError<ITurmaRequest>())
      );
  }

  getLista(): Observable<ITurmaResponse[]> {
    return this.apiClient.get(`/turma/all`)
      .pipe(
        catchError(this.handleApiError.handleError<ITurmaResponse[]>())
      );
  }
}
