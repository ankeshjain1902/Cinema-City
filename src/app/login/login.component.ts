import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomePageService } from '../home-page/home-page.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm !: FormGroup;
  successMessage: String = '';
  errorMessage: String = '';
  constructor(private formbuilder:FormBuilder, private ls:LoginService , private hs: HomePageService, private http:HttpClient, private router:Router) { }

  userArray: any=[];
  ngOnInit(): void {
    /* Add the following formcontrols to the loginForm reactive form instance with 
    the given default values and validators for each form control
    1. emailId:- default:" ", Validators: required, email(It should be in correct email form)
    2. password:- default:" ", Validators: required, pattern- should have 1 capital, 1 lower, 1 number, 1 special character, minimum 8 characters. */

    this.loginForm = this.formbuilder.group({
      emailId: ["",[Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,20}$/)]],
      rememberMe: [false],
    })
  }
  

// login method define and login validation 
  logIn(){ 
    // console.log(this.loginForm.value.emailId);
  
    this.ls.logIn(this.loginForm.value).subscribe((res)=>{
      console.log(res);
      if(res){
        this.hs.isLoggedIn = true;
        this.ls.getUser(this.loginForm.value.emailId).subscribe((user) => {
          console.log('Logging true', this.loginForm.value.rememberMe);
          if (this.loginForm.value.rememberMe) {
            localStorage.setItem('userEmail', user["emailId"]);            
          } else {
            sessionStorage.setItem('userEmail', user["emailId"]);
          }
        });
        this.successMessage = "Login Successful, redirecting you to Home page"
        alert(this.successMessage);
        this.router.navigate(['/home']);
      }else{
        this.errorMessage= 'Invalid User Email or Password';
        alert(this.errorMessage);
      }
      
      
    }, (error)=>{
      console.log('Some error Occured');
    });
    
  }
}
