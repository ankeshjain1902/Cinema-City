import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  selectedDateTimeTheatre ={};
  selectedSeat = {};
  isLoggedIn = false;
  
  constructor(private http:HttpClient) {}
  
  getMovie(){
    /* It uses GET request to get data from the url http://localhost:3000/movies 
     2. The API call returns an observable as a response */
    return this.http.get('http://localhost:3000/movies');
  }

  registerUser(registerObj:any){
    return this.http.post('http://localhost:3000/users',registerObj);
  }

  getUser(emailId :any) {
    return this.http.get(`http://localhost:3000/users?emailId=${emailId}`);
  }

  // logIn(user): Observable<any> {
  //   return this.http.get(`http://localhost:3000/users?emailId=${user.emailId}&password=${user.password}`);
  // }

  getBooking(): Observable<any> {
    let localEmailId = localStorage.getItem('userEmail');
    let sessionEmailId = sessionStorage.getItem('userEmail');
    if (localEmailId) {
      return this.http.get(`http://localhost:3000/book?emailId=${String(localEmailId)}`);
    } else {
      return this.http.get(`http://localhost:3000/book?emailId=${String(sessionEmailId)}`);
    }
  }
  bookSeat(seatObj: any) {
    return this.http.post('http://localhost:3000/book', seatObj);
  }
  

}
