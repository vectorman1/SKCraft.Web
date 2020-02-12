import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news';
import { ConfigService } from 'src/config/config.service';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    constructor(
        private http: HttpClient, 
        private config: ConfigService) {
    }

    public get(): Observable<News[]> {
        return this.http
            .get<News[]>(this.config.apiUrl + `${this.config.newsEndpoint}`);
    }
}

