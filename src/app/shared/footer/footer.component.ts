import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	test: Date = new Date();

	constructor(private authService: AuthService, private location: Location) {
	}

	ngOnInit() {
	}

	public get isAuthenticated(): boolean {
		return this.authService.isAuthenticated();
	}

	public get isHome(): boolean {
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === '#') {
			titlee = titlee.slice(1);
		}
		if (titlee === '/home') {
			return true;
		}
		else {
			return false;
		}
	}

	public get isProfile(): boolean {
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === '#') {
			titlee = titlee.slice(1);
		}
		if (titlee.includes('/profile')) {
			return true;
		}
		else {
			return false;
		}
	}
}
