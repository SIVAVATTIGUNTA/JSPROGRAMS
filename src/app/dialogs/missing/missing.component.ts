import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { UserData } from 'src/app/data-models/UserData';
import { UserService } from 'src/app/services/User.service';


@Component({
  selector: 'app-missing',
  templateUrl: './missing.component.html',
  styleUrls: ['./missing.component.css']
})
export class MissingComponent implements OnInit {

  countryValue : string = '';
  industryValue : string = '';
  experienceValue : string = '';
  isErrorVisible : boolean = false;
  errorText: string = '';
  userData!: UserData;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, public dialogRef: MatDialogRef<MissingComponent>,
  private userService: UserService) { }


  closeDialog() {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

  UpdateMissingData(){
    this.userData = new UserData;
    // const country = (<HTMLInputElement>document.getElementById("countryDom")).value; 
    // if(country){
    //   this.userData.country = country;
    // }
    // const industry = document.getElementById('industryDom') as HTMLInputElement | null;
    // if(industry?.value){
    //   this.userData.industry_category = industry?.value;
    // }
    // const experience = document.getElementById('experienceDom') as HTMLInputElement | null;
    // if(experience?.value){
    //   this.userData.total_experience_in_year = experience?.value;
    // }
    if(this.countryValue){
      this.userData.country = this.countryValue;
    }
    
    if(this.industryValue){
      this.userData.industry_category = this.industryValue;
    }

    if(this.experienceValue){
      this.userData.total_experience_in_year = this.experienceValue;
    }

    this.userData.email = 'dineshsai2011@gmail.com';
    console.log(this.userData);

    this.userService.UpdateMissingData(this.userData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.dialogRef.close();
        },
        error : (error: HttpErrorResponse) => {
          console.log("error");
        }})
  }

}
