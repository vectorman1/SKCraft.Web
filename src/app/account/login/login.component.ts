import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserLogin } from './UserLogin';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	focus;
	focus1;
	error;
	submitted: boolean = false;
	userLogin: UserLogin = { password: '', userName: '' };
	success: boolean = false;


	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	login() {
		this.submitted = true;
		this.authService.login(this.userLogin).pipe(finalize(() => {
			this.submitted = false;
		}))
			.subscribe(
				result => {
					if (result) {
						this.success = true;
						this.authService.storeToken(result.token);
						this.router.navigate(['/account/profile']);
					}
				},
				error => {
					this.error = error;
				});
	}
}
