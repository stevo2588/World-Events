import { ENV } from './../../environment';
import {Injectable} from '@angular/core';

@Injectable()
export class EnvironmentService {

    public getEventAPIUrl() : string{
        if(ENV.currentEnvironment === "development"){
            return ENV.development.eventAPIUrl;
        } else if(ENV.currentEnvironment === "production") {
            return ENV.production.eventAPIUrl;
        }
    }
}