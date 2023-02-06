import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomePageService } from './home-page.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  movies:any=[];
  error :string="";
  flag:true;
  datas:any[]=[
    // {path:"../../assets/a.jpg"},
    {path:"../../assets/b.jpg"},
    {path:"../../assets/c.jpg"},
    {path:"../../assets/d.jpg"},
  ];
  constructor( private hs:HomePageService, private router:Router ) {
    
   }
  

  ngOnInit(): void {
    /*Provide the appropriate code here to render the recommended movie using getMovie method 
    of homePage service class and it returns an observable as a response
     In case of any error it should also render error message*/
     this.hs.getMovie().subscribe((data)=>{
      this.movies=data
     },(error)=>{this.error="Failed to fetch"})
  }


  showMovies(moviesId:any){
    this.router.navigate(['/view/', moviesId]);
    
  }
 

}


