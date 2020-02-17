import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { UserData } from '../models/UserData';
import { log } from 'util';
import { Observable } from 'rxjs';
import { Settings } from '../models/Settings';

@Injectable()
export class WebService {
    /**
     *
     */
    constructor(private http: HttpClient, private configService: ConfigService) {

    }

    getUserData(): Observable<UserData> {
        return this.http.get<UserData>(this.configService.apiBaseUrl + `web/user_data`);
    }

    updateSettings(settings: Settings) {
        return this.http.post(this.configService.apiBaseUrl + `web/settings`, settings);
    }
}