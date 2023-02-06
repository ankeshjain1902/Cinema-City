import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup;
  successMessage: string;
  errorMessage: string;
  constructor(private formbuilder:FormBuilder, private hs:HomePageService, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    /* Add the following formcontrols to the loginForm reactive form instance with 
    the given default values and validators for each form control
    1. emailId:- default:" ", Validators: required, email(It should be in correct email form)
    2. password:- default:" ", Validators: required, pattern- should have 1 capital, 1 lower, 1 number, 1 special character, minimum 8 characters. */

    this.registerForm = this.formbuilder.group({
      name: ["",[Validators.required, Validators.pattern(/^[A-Za-z\s]{4,}$/)]],
      emailId: ["",[Validators.required, Validators.email]],
      mobile: ["",[Validators.required, Validators.pattern(/^[6-9][0-9]{9,9}$/)]],
      password: ["",[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,20}$/)]]
      
    })
  }
  

// register method define and register validation 
  register(){ 

      // this.successMessage = this.errorMessage = '';
      console.log(this.registerForm.value); 
      this.hs.registerUser(this.registerForm.value).subscribe((data) => {
        console.log(data);
        alert("Registration Successful");
        this.router.navigate(['/login'])

      }, (error) => {
        alert('registration failed');
      });
  }

}
