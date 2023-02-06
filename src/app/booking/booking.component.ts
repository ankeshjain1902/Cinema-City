import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking:any=[];
  constructor(private hs:HomePageService) { }

  ngOnInit(): void {
    this.getBooking()
  }

  getBooking(){
    this.hs.getBooking().subscribe((data)=>{
      console.log(data);
      
      this.booking = data
      
    },(error)=>{
      console.log("Error in fetching details ", error);
    })
    // console.log(this.hs.selectedDateTimeTheatre);
    
    // console.log(this.hs.selectedSeat);
    
  }

}
