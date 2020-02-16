import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

import { BaseService } from "../../shared/base.service";
import { ConfigService } from '../../shared/config.service';
import { log } from 'util';
import { AuthenticationResult } from './AuthenticationResult';
import { JwtUser } from './JwtUser';

import * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService {
    // Observable navItem source
    private _authNavStatusSource = new BehaviorSubject<boolean>(false);
    // Observable navItem stream
    authNavStatus$ = this._authNavStatusSource.asObservable();

    authenticationChange: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient, private configService: ConfigService) {
        super();
    }

    getUser(): JwtUser {
        let token = localStorage.getItem('id_token');

        if (token === null) {
            return null;
        }

        let decodedToken = jwt_decode(token);
        let user =
            new JwtUser(
                decodedToken.nameid,
                decodedToken.role);
        return user;
    }

    isAuthenticated() {
        let user = this.getUser();

        if (!user) {
            return false;
        }

        return true;
    }

    login(userLogin: any) {
        return this.http
            .post<AuthenticationResult>(this.configService.apiBaseUrl + 'authentication/login', userLogin)
            .pipe(
                catchError(this.handleIdentityError));
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    register(userRegistration: any) {
        log(userRegistration);
        return this.http.post(this.configService.apiBaseUrl + 'authentication/register', userRegistration).pipe(catchError(this.handleIdentityError));
    }

    storeToken(token: string) {
        localStorage.setItem('id_token', token);
    }
}
