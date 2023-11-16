import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Color } from '@swimlane/ngx-charts';
import { UserData } from '../../data-models/UserData';
import { SkillPassportService } from '../../services/SkillPassport.service';

@Component({
  selector: 'app-skill-passport',
  templateUrl: './skill-passport.component.html',
  styleUrls: ['./skill-passport.component.css']
})
export class SkillPassportComponent implements OnInit {

  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  	
	userData !: UserData;
	skillData : any;

	displaySlide = 1;
	name !: string;

  saleData !: any[];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  multi!: any[];
  view : [number, number] = [700, 300];
  colorScheme : string | Color = '#5AA454';

  constructor(private skillPassportService : SkillPassportService) {
   }

  ngOnInit(): void {

    this.saleData = [
      { name: "Mobiles", value: 105000 },
      { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }
    ];

	this.userData = new UserData;
    this.userData.email = 'dineshsai2011@gmail.com';
	this.skillPassportService.GetSkillData(this.userData)
              .subscribe({
                next: (response: any) => {
                  if(response.result){
					this.skillData = response.result;
          this.name = this.skillData.name;
					console.log(this.skillData);

                  }
                },
                error : (error: HttpErrorResponse) => {
                  console.log("error");
                }})
  }

  Next(){
this.displaySlide = this.displaySlide + 1;
  }

  Previous(){
	this.displaySlide = this.displaySlide - 1;
}
}
