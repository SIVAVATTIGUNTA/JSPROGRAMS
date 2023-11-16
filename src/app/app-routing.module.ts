import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Component Section */
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalaryCalculatorComponent } from './dashboard/salary-calculator/salary-calculator.component';
import { SkillPassportComponent } from './dashboard/skill-passport/skill-passport.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login',component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent ,
  children: [
    { path: '', redirectTo: '/dashboard/salarycalculator', pathMatch: 'full'},
    { path: 'salarycalculator',   component: SalaryCalculatorComponent },
    { path: 'skillpassport',   component: SkillPassportComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
