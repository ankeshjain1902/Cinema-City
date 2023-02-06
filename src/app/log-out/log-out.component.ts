import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private hs: HomePageService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.hs.isLoggedIn = false;
    console.log("Ankesh jain");
    
    this.router.navigate(['/home']);
  }

}
