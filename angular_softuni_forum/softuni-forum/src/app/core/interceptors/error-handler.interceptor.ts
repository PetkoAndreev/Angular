import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageBusService, MessageType } from './../services/message-bus.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private messageBus: MessageBusService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      // Notify header
      this.messageBus.notifyForMessage({
        text: err?.error?.message || 'Something went wrong',
        type: MessageType.Error
      })
      return throwError(err);
    }));
  }
}
