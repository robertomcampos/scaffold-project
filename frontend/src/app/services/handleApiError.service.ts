import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
    providedIn: 'root',
})
export class HandleApiError {

    constructor(private notificationService: NotificationService) { }

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            let errorMessage = error.message;
            if (error.error && error.error.messages) {
                errorMessage = error.error.messages.join(' - ');
            }
            this.notificationService.showError(`${operation} failed: ${errorMessage}`);
            return throwError(error);
        };
    }
}