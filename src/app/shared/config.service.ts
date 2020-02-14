import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserManagerSettings } from 'oidc-client';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor() { }

    get apiBaseUrl() {
        return environment.production ?
            '' : 'https://localhost:44313/api/';
    }

    get clientId() {
        return 'skcraft_spa';
    }

    get redirectUri() {
        return environment.production ?
            '' : 'http://localhost:4200/auth-callback';
    }

    get baseUrl() {
        return environment.production ?
            '' : 'http://localhost:4200'
    }

    get responseType() {
        return 'id_token token';
    }

    get scope() {
        return 'openid profile email api.read';
    }


    get ClientSettings(): UserManagerSettings {
        return {
            authority: this.apiBaseUrl,
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            post_logout_redirect_uri: this.baseUrl,
            response_type: this.responseType,
            scope: this.scope,
            filterProtocolClaims: true,
            loadUserInfo: true,
            automaticSilentRenew: true,
            silent_redirect_uri: this.baseUrl + '/silent-refresh.html'
        }
    }
}
