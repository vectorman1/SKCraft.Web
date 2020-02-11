import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service'
import { User } from 'src/models/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient, 
        private config: ConfigService) {
    }

    public get(id: number): Observable<User> {
        return this.http
            .get<User>(this.config.apiUrl + `${this.config.userEndpoint}${id}`);
    }
}

