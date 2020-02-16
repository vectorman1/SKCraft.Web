import { Component, OnInit } from '@angular/core';
import { UserRegistration } from './UserRegistration';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	success: boolean;
	error: string;
	userRegistration: UserRegistration = { userName: '', email: '', password: '' };
	submitted: boolean = false;


	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() { }

	onSubmit() {
		this.submitted = true;

		this.authService.register(this.userRegistration)
			.pipe(finalize(() => {
				this.submitted = false;
			}))
			.subscribe(
				result => {
					if (result) {
						this.success = true;
						this.router.navigate(['/account/login/']);
					}
				},
				error => {
					this.error = error;
				});
	}
}
