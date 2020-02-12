import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ApplyComponent } from './apply/apply.component';


@NgModule({
	declarations: [
		HomeComponent,
		RulesComponent,
		TermsComponent,
		PrivacyComponent,
		ApplyComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
