import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
	{ path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule) }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		AccountModule,
		HomeModule,
		RouterModule.forRoot(routes, {
			useHash: false
		})
	],
	exports: [
	],
})
export class AppRoutingModule { }
