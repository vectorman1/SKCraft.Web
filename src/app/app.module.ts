import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { RulesComponent } from './rules/rules.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

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
