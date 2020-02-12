import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent,
		ProfileComponent
	],
	imports: [
		CommonModule,
		AccountRoutingModule,
		NgbModule
	]
})
export class AccountModule { }
