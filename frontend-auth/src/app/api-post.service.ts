import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  constructor(private httpClient: HttpClient) {}

  createUsers(user: Users) {
    return this.httpClient.post(`https://reqres.in/api/register`,user).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!',error );
           })
        )
    }
}
