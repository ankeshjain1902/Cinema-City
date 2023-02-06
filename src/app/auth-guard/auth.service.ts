import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router, private hs: HomePageService) { }

  checkUser() {
    let localEmailId = localStorage.getItem('userEmail');
    let sessionEmailId = sessionStorage.getItem('userEmail');
    return this.hs.getUser(localEmailId || sessionEmailId);
  }
}
