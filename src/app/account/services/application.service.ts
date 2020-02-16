import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { Application } from '../models/Application';
import { Observable } from 'rxjs';

@Injectable()
export class ApplicationService {
    constructor(private http: HttpClient, private configService: ConfigService) { }

    getForCurrentUser(): Observable<Application[]> {
        return this.http.get<Application[]>(this.configService.apiBaseUrl + 'web/applications');
    }
}