import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';

@Injectable()
export class FileUploadService {
  constructor(private httpService: HttpService) { }

  public UploadFileData(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/cv/parse', data);
  }

  public UploadFile(fileToUpload: File): Observable<any> {
    let  formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    return this.httpService.makePostRequestforFormData('api/cv/parse', formData);
  }
}