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
import { AuthGuard } from '../core/authentication/auth.guard';
import { SignoutComponent } from './signout/signout.component';
import { WebService } from './services/web.service';
import { ApplicationService } from './services/application.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../interceptor/httpconfig.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent,
		ProfileComponent,
		SignoutComponent
	],
	providers: [
		AuthService,
		WebService,
		ApplicationService,
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpConfigInterceptor,
			multi: true
		}
	],
	imports: [
		CommonModule,
		CoreModule,
		AccountRoutingModule,
		FormsModule,
		NgbModule,
		MatProgressSpinnerModule
	]
})
export class AccountModule { }
