import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RulesComponent } from './rules/rules.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'demo', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
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
