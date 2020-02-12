import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { ConfigService } from '../shared/config.service';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent,
		ProfileComponent
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
