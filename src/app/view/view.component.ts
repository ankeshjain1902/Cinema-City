import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  movies:any=[]
  error: string="";
  id: any;
  viewForm: FormGroup;
  constructor(private hs:HomePageService, private fb:FormBuilder, private router:Router, private aroute:ActivatedRoute) { }

  

  ngOnInit(): void {


    this.viewForm =this.fb.group({
      Date: ['',[Validators.required, this.validateDate]],
      Time: ['',[Validators.required]],
      Theatre: ['',[Validators.required]]
    })

    this.getId();
    this.hs.getMovie().subscribe((data)=>{
      this.movies=data
      console.log(this.movies); 
     },(error)=>{this.error="Failed to fetch"})
  }

  validateDate(c: FormControl) {
    /*
      1. it should take the dateOfJourney value and validate it
      2. if the date is from past, it should return { dateError: { message: "Journey Date cant be a past date" } }
      3. else it should return null
    */
   let doj = new Date(c.value)
  //  console.log(c.value);
   
   let today = new Date()
   if( doj < today){
    return { dateError: { message: "Past date cannot be choosen.." } }
   }
    return null;
  }

  getId(){
    this.aroute.params.subscribe((data)=>{
      console.log(data.moviesId)
      this.id = data.moviesId-1;
      console.log('id:'+this.id);  
    })
  }

  bookSeat(){
    this.hs.selectedDateTimeTheatre = {
      date: this.viewForm.value.Date,
      time: this.viewForm.value.Time,
      theatre: this.viewForm.value.Theatre
    }
    this.router.navigate(['home/', this.id+1])
    console.log(this.hs.selectedDateTimeTheatre);
    
  }

}
