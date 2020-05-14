import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IApiResult } from '../../shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private ApiKey:string = "?code=Lj5UbnVZ1UosNGofQy4VBdR0Xn0JpUPB/1ln10c7CXEzQhcX3fVybQ==";
  private ApiURL:string = "https://azurefunctionsadventure.azurewebsites.net/api/person";


  constructor(
    private http: HttpClient
    ) { }


  getPeople(): Observable<IApiResult> {

    const ApiToCall = this.ApiURL + this.ApiKey;
    return this.http.get<IApiResult>(ApiToCall)
      .pipe(
        tap (data => console.log('All People: ', data)),
        catchError(this.handleError)
      );
  }



  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
