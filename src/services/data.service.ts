import { Observable, ConnectableObservable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Injectable} from "@angular/core";
import { Http, Response } from "@angular/http";

import { EnvironmentService } from './environment.service';
import { WorldEvent } from './../models/world-event';


@Injectable()
export class DataService {

  private url: string;
  obsv: ConnectableObservable<WorldEvent[]>;

  constructor(private environmentService: EnvironmentService, private http: Http) {
    this.url = this.environmentService.getEventAPIUrl();

    this.obsv = Observable
      .interval(900000)
      .startWith(0)
      .flatMapTo(this.http.get(this.url))
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
      .share()
      .publishReplay(1);

    this.obsv.connect();
  }
}
