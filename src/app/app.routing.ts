import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './account/components/profile/profile.component';
import { SignupComponent } from './account/components/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components//apply/apply.component';
import { TermsComponent } from './components//terms/terms.component';
import { PrivacyComponent } from './components//privacy/privacy.component';
import { RulesComponent } from './components//rules/rules.component';
import { NewsComponent } from './components//news/news.component';
import { LoginComponent } from './account/components/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'apply', component: ApplyComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: 'rules', component: RulesComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },

	{ path: 'landing', component: LandingComponent },
	{ path: 'demo', component: ComponentsComponent },
	{ path: 'nucleoicons', component: NucleoiconsComponent }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: true
		})
	],
	exports: [
	],
})
export class AppRoutingModule { }
