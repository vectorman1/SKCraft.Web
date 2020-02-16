import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	test: Date = new Date();

	constructor(private authService: AuthService) {
	}

	ngOnInit() {
	}

	public get isAuthenticated(): boolean {
		return this.authService.isAuthenticated();
	}

}
