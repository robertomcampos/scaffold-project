import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../../constants';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};

@Injectable({
    providedIn: 'root',
})
export class ApiClient {

    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any> {
        return this.httpClient.get(`${Constants.API_BASE_URL}${url}`, httpOptions);
    }

    post(url: string, data: any): Observable<any> {
        return this.httpClient.post(`${Constants.API_BASE_URL}${url}`, data, httpOptions);
    }

    deleteAll(url: string, ids: any): Observable<any> {
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            body: ids
          }
        return this.httpClient.delete(`${Constants.API_BASE_URL}${url}`, options);
    }

    delete(url: string): Observable<any> {
        return this.httpClient.delete(`${Constants.API_BASE_URL}${url}`);
    }
}
