import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../common/http.service';

@Injectable()
export class SkillPassportService {
  constructor(private httpService: HttpService) { }

  public GetSkillData(data: any): Observable<any> {
    return this.httpService.makePostRequest('api/skill/passport', data);
  }
}