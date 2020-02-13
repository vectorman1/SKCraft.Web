import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { AuthService } from '../core/authentication/auth.service';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent,
		ProfileComponent
	],
	providers: [
		AuthService
	],
	imports: [
		CommonModule,
		CoreModule,
		AccountRoutingModule,
		FormsModule,
		NgbModule
	]
})
export class AccountModule { }
