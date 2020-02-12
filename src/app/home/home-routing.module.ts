import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ApplyComponent } from './apply/apply.component';
import { RulesComponent } from './rules/rules.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: 'rules', component: RulesComponent },
	{ path: 'apply', component: ApplyComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class HomeRoutingModule { }
