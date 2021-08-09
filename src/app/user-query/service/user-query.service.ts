import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService {
  constructor(private httpClient: HttpClient) { }

  url = 'https://api.github.com/users/'

  // Obtem os dados pelo usuario 
  getUser(user: any): Observable<any> {
    return this.httpClient.get<any>(this.url + user);
  }

  getRepositories(user: string): Observable<any> {
    return this.httpClient.get<any>(this.url + user + "/repos")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };

  getStarred(user: string): Observable<any> {
    return this.httpClient.get<any>(this.url + user + "/starred")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  };

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    
    return throwError(errorMessage);
  };

}
