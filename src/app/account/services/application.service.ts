import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { Application } from '../models/Application';

@Injectable()
export class ApplicationService {
    constructor(private http: HttpClient, private configService: ConfigService) { }

    getForCurrentUser() {
        let applications: Application[];

        this.http.get<Application[]>(this.configService.apiBaseUrl + 'web/applications')
            .subscribe(res => {
                applications = res;
            })

        return applications;
    }
}