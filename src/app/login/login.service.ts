import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  logIn(user): Observable<any> {
    return this.http.get(`http://localhost:3000/users?emailId=${user.emailId}&password=${user.password}`);
  }

  getUser(emailId :any) {
    return this.http.get(`http://localhost:3000/users?emailId=${emailId}`);
  }
}
