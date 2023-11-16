import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';
import { LoginData } from '../data-models/LoginData';

@Injectable()
export class AuthenticationService {
  constructor(private httpService: HttpService) { }

  public Authenticate(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/signin', data);
  }
}