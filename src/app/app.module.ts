import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import * as Material from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgxChartsModule }from '@swimlane/ngx-charts';

//Common
import { HttpService } from './common/http.service';

//Services
import { FileUploadService } from './services/File-Upload.service';
import { AuthenticationService } from './services/Authentication.service';
import { UserService } from './services/User.service';
import { CalculationService } from './services/Calculation.service';
import { MissingComponent } from './dialogs/missing/missing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { SalaryCalculatorComponent } from './dashboard/salary-calculator/salary-calculator.component';
import { SkillPassportComponent } from './dashboard/skill-passport/skill-passport.component';
import { SkillPassportService } from './services/SkillPassport.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MissingComponent,
    SalaryCalculatorComponent,
    SkillPassportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [HttpService, 
              FileUploadService,
              AuthenticationService,
              UserService,
              CalculationService,
              SkillPassportService],
  bootstrap: [AppComponent],
  entryComponents: [MissingComponent]
})
export class AppModule { }
