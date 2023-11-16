import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/Authentication.service';
import { LoginData } from '../data-models/LoginData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorText !: string;
  isErrorVisible : boolean = false;
  loginData !: LoginData;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  SignIn(userId: string, verificationCode: string){

    if(userId.length == 0 || verificationCode.length == 0)
    {
      this.isErrorVisible = true;
      this.errorText = "please enter credentials to verify !!!";
      console.log("please enter credentials to verify !!!")
    }
    else
    {
      
      this.loginData = new LoginData;
      this.loginData.email = userId;
      this.loginData.password = verificationCode;

      console.log(this.loginData);

      this.authenticationService.Authenticate(this.loginData)
      // .subscribe((response: any) => {
      //   if(response){
      //     console.log(response);
      //     this.router.navigate(['/dashboard']);
      //   }
      // },
      // ((error: HttpErrorResponse) => {
      //   this.router.navigate(['/dashboard']);
      // })

      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/dashboard']);
        },
        error : (error: HttpErrorResponse) => {
          console.log("error");
          this.router.navigate(['/dashboard']);
        }})
    }
  }
}
