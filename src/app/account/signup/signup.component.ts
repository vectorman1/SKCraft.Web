import { Component, OnInit } from '@angular/core';
import { UserRegistration } from './UserRegistration';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	success: boolean;
	error: string;
	userRegistration: UserRegistration = { displayName: '', email: '', password: '' };
	submitted: boolean = false;


	constructor(private authService: AuthService) { }

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
					}
				},
				error => {
					this.error = error;
				});
	}
}
