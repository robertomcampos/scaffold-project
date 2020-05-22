import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Constants from '../constants';
import { NotificationService } from './notification.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root',
})
export class ApiClient {

    constructor(private httpClient: HttpClient) { }

    get(url: string): Observable<any> {
        return this.httpClient.get(`${Constants.API_BASE_URL}${url}`);
    }

    post(url: string, data: any): Observable<any> {
        return this.httpClient.post(`${Constants.API_BASE_URL}${url}`, data, httpOptions);
    }
}

@Injectable({
    providedIn: 'root',
})
export class HandleApiError {

    constructor(private notificationService: NotificationService) { }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            this.notificationService.showError(`${operation} failed: ${error.message}`);
            console.error('the api is not available. The object result is: ', result);
            return throwError(error);
        };
    }
}
