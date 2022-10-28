import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IWork } from '../shared/feat-works/work';

@Injectable({
  providedIn: 'root',
})
export class FeatWorksService {
  constructor(private _http: HttpClient) {}

  private _worksURL: string = 'api/feat-works.json';

  getWorks(): Observable<IWork[]> {
    return this._http.get<IWork[]>(this._worksURL).pipe(
      tap((data) => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getWorkById(id: number): Observable<IWork | undefined> {
    return this.getWorks().pipe(
      map((works: IWork[]) => works.find((w) => w.workId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
