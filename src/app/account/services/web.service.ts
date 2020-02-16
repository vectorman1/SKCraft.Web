import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../shared/config.service';
import { UserData } from '../models/UserData';

@Injectable()
export class WebService {
    /**
     *
     */
    constructor(private http: HttpClient, private configService: ConfigService) {

    }

    getMinecraftUuid(): string {
        let uuid;

        this.http.get<string>(this.configService.apiBaseUrl + 'web/minecraft_uuid')
            .subscribe(res => {
                uuid = res;
            });

        return uuid;
    }

    getUserData(): UserData {
        let userData: UserData;

        this.http.get<UserData>(this.configService.apiBaseUrl + `/web/user_data`)
            .subscribe(res => {
                userData = res;
            });

        return userData;
    }
}