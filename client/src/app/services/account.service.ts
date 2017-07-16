import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Account} from '../models/account.model';
import {RequestUtil} from '../utils/request.util';
import {ApiError} from './commons/api.error';

@Injectable()
export class AccountService {

  constructor(private http: Http) {

  }

  public getAuthenticatedAccount(): Observable<Account> {
    return this.http.get(RequestUtil.getUrl('/accounts/authenticated'), RequestUtil.newOptionsWithAppToken())
      .map((res: Response) => new Account(res.json()))
      .catch((err: Response) => Observable.throw(new ApiError(err)));
  }

  public createAccount(name: string, email: string, password: string): Observable<Account> {
    return this.http.post(RequestUtil.getUrl('/accounts'), {name, email, password}, RequestUtil.newOptionsWithAppToken())
      .map((res: Response) => new Account(res.json()))
      .catch((err: Response) => Observable.throw(new ApiError(err)));
  }
}
