import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../core/authentication/auth.guard';
import { SignoutComponent } from './signout/signout.component';


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'signout', component: SignoutComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }
