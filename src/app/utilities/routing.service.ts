import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private location: Location) {
    }

    public getPath() {
        var path = this.location.prepareExternalUrl(this.location.path());

        if(path.charAt(0) === '#'){
            path = path.slice(1);
        }

        return path;
    }
}