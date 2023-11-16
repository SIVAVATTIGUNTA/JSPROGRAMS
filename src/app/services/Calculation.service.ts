import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';
import { UserData } from '../data-models/UserData';

@Injectable()
export class CalculationService {
  constructor(private httpService: HttpService) { }

  public GetCalculationData(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/calculation', data);
  }
}