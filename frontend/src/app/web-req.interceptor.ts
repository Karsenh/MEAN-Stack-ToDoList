import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, empty, Subject } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebRequestInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  refreshingAccessToken: boolean;

  accessTokenRefreshed: Subject<any> = new Subject();

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    // Handle the request - adds the access token to each request
    request = this.addAuthHeader(request);

    // call next() and handle the response
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);

        if (error.status === 401) {
          // 401 Error = we are unauthorized

          // refresh the access token
          return this.refreshAccessToken()
            .pipe(
              // RXJS operator that returns an obersable which emits items based on applied function
              switchMap(() => {
                request = this.addAuthHeader(request);
                return next.handle(request);
              }),
              catchError((err: any) => {
                console.log(err);
                this.authService.logout();
                // return empty observable
                return empty();
              })
            )
        }

        return throwError(error);
      })
    )
  }

  // Method to refresh the access token
  refreshAccessToken() {
    if (this.refreshingAccessToken) {
      return new Observable(observer => {
        this.accessTokenRefreshed.subscribe(() => {
          // This code will run when the access token has been refreshed
          observer.next();
          // This will provide the signal to re-run the request
          observer.complete();
        })
      })
    } else {
      this.refreshingAccessToken = true;
      // Call a method in the auth service to send a request to refresh the access token
      return this.authService.getNewAccessToken().pipe(
        // Operator which allows us to tap into the response of the observable - similar to 'subscribe' but won't execute the observable - subscribe will
        tap(() => {
          console.log("Access Token Successfully Refreshed");
          this.refreshingAccessToken = false;
          this.accessTokenRefreshed.next();
        })
      )
    }

  }

  addAuthHeader(request: HttpRequest<any>) {
    // Get Access Token
    const token = this.authService.getAccessToken();
    
    if (token) {
      // Append Access token to the request header
      return request.clone({
        setHeaders: {
          'x-access-token': token
        }
      })
    }
    return request;
  }
}
