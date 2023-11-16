import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';
import { UserData } from '../data-models/UserData';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) { }

  public GetMissingData(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/missing', data);
  }

  public UpdateMissingData(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/missing/write', data);
  }
}