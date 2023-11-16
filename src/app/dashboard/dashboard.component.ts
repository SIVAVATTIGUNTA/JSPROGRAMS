import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/User.service';
import { UserData } from '../data-models/UserData';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MissingComponent } from '../dialogs/missing/missing.component';
import { CalculationService } from '../services/Calculation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService : UserService,
    private calculatorService : CalculationService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Calculate(){
    this.router.navigate(['/dashboard/salarycalculator']);
  }

  OpenSkillPassport() {
    this.router.navigate(['/dashboard/skillpassport']);
  }

}
