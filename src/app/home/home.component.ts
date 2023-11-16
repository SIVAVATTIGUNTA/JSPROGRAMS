import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../services/File-Upload.service';
import { FileData } from '../data-models/FileData';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileData !: FileData;
  data : any;
  fileToUpload: File | null = null;

  constructor(private router: Router, private fileUploadService: FileUploadService) { 
    
  }

  ngOnInit(): void {
  }

  VerifyToSignIn(){
    this.router.navigate(['/login']);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)

    if((this.fileToUpload != null) && this.validateFile(this.fileToUpload?.name)){
      this.PrepareAndUpload(this.fileToUpload);
    }
    else{
      console.log("please upload PDF or Word document !!!!");
    }

    this.resetFileUpload();
  }

  resetFileUpload() {
    (<HTMLInputElement>document.getElementById('file')).value = '';
  }

  validateFile(name: String | null) {
    var ext = name?.substring(name.lastIndexOf('.') + 1);
    if (ext?.toLowerCase() == 'pdf' || ext?.toLowerCase() == 'docx') {
      return true;
    }
    else {
      return false;
    }
  }

  PrepareAndUpload(fileToUpload: File) {
    this.fileData = new FileData;
    
    const reader = new FileReader();
    reader.readAsDataURL(fileToUpload);
    // reader.onload = (e) => {
        
    //     if(reader.result){
    //       this.fileData.data = reader.result.toString();
    //     }

    //     this.fileUploadService.UploadFileData(this.fileData).subscribe((response: any) => {
    //       if(response){
    //         console.log(response);
    //         this.router.navigate(['/login']);
    //       }
    //     });
    // };

    reader.onload = (e) => {
      console.log("0 - "+this.fileData.data);
        if(reader.result){
          //this.fileData.data = window.btoa(reader.result.toString());
          this.fileData.data = reader.result.toString().split(',')[1];
          console.log("1 -  "+this.fileData.data);
          console.log(this.fileData);
        }
        console.log("2 - "+this.fileData.data);
        this.fileUploadService.UploadFileData(this.fileData).subscribe((response: any) => {
          if(response){
            console.log(response);
            this.router.navigate(['/login']);
          }
        });
    };


    // let  formData: FormData = new FormData();

    // formData.append('excelFileName', fileToUpload, fileToUpload.name);
    // return this.fileUploadService.UploadFile(fileToUpload).subscribe((response: Response) => {
    //     console.log(response);
    //     if(response){
    //               console.log(response);
    //              this.router.navigate(['/login']);
    //             }
    //   });
  }  
}