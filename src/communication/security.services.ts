import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class SecurityServices {
  constructor(private http: Http) { }

  doLogin(email: string, password: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post("http://localhost:8080/sec/login", JSON.stringify({email:email, password:password}),options)
      .map((response: Response) => {
        console.info("Response : " + response.json());
        return response.json();
      });
  }
}