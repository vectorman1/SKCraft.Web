import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    private _apiUrl : string = 'https://localhost:44313/api';

    private _userEndpoint: string = "/user/";
    private _newsEndpoint: string = "/news/";

    public get apiUrl() : string {
        return this._apiUrl;
    }

    public get userEndpoint(): string {
        return this._userEndpoint;
    }

    public get newsEndpoint(): string {
        return this._newsEndpoint;
    }
}