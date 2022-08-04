import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';


interface IEmployee {
  id: number,
  name: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})



export class EmpserviceService {

  //private _url = "./assets/data/employee.json";
  private _url = "https://gorest.co.in/public/v2/users";

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {

    
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

}
