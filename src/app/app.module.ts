import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { ApplyComponent } from './components/apply/apply.component';
import { RulesComponent } from './components/rules/rules.component';

import { LoginComponent } from './account/components/login/login.component';
import { SignupComponent } from './account/components/signup/signup.component';
import { ProfileComponent } from './account/components/profile/profile.component';

import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		ApplyComponent,
		RulesComponent,
		LoginComponent,
		SignupComponent,
		ProfileComponent,
		PrivacyComponent,
		TermsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
		ComponentsModule,
		ExamplesModule,
		AppRoutingModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
