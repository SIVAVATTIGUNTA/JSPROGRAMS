import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User.service';
import { UserData } from '../../data-models/UserData';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MissingComponent } from '../../dialogs/missing/missing.component';
import { CalculationService } from '../../services/Calculation.service';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent implements OnInit {

  userEmail: string = 'dineshsai2011@gmail.com';
  userData !: UserData;

  minValue : string = '---'
  mediumValue : string = '---'
  maxValue : string = '---'

  showCalculatedData : boolean = false;

  constructor(private userService : UserService,
    private calculatorService : CalculationService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ShowCalculation(){
    //this.showCalculatedData = !this.showCalculatedData;
    this.showCalculatedData = true;
    this.Calculate();
  }

  Calculate(){
    this.userData = new UserData;
    this.userData.email = 'dineshsai2011@gmail.com';
    this.userService.GetMissingData(this.userData)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          if(response?.missing?.length > 0){
            const dialogRef = this.dialog.open(MissingComponent, {
              width: '500px',
              height: '400px',
              data: response.missing,
            });
        
            dialogRef.afterClosed().subscribe(result => {

              console.log('The dialog was closed');
              this.calculatorService.GetCalculationData(this.userData)
              .subscribe({
                next: (response: any) => {
                  if(response.result && response.result.length > 0){
                    this.minValue = response.result[0].out_min_min;
                    this.mediumValue = response.result[0].out_min_median;
                    this.maxValue = response.result[0].out_min_max;
                  }
                },
                error : (error: HttpErrorResponse) => {
                  console.log("error");
                }})
            });
          }
          else{
            this.calculatorService.GetCalculationData(this.userData)
              .subscribe({
                next: (response: any) => {
                  if(response.result && response.result.length > 0){
                    this.minValue = response.result[0].out_min_min;
                    this.mediumValue = response.result[0].out_min_median;
                    this.maxValue = response.result[0].out_min_max;
                  }
                },
                error : (error: HttpErrorResponse) => {
                  console.log("error");
                }})
          }
        },
        error : (error: HttpErrorResponse) => {
          console.log("error");
          //this.router.navigate(['/dashboard']);
        }})
  }

}
