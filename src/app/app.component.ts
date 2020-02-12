import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RoutingService } from './shared/utilities/routing.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	private _router: Subscription;
	@ViewChild(NavbarComponent) navbar: NavbarComponent;

	constructor(
		private renderer: Renderer2,
		private router: Router,
		private element: ElementRef,
		public location: Location,
		private routingService: RoutingService
	) { }

	ngOnInit() {
		const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

		this._router = this.router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe((event: NavigationEnd) => {
				if (window.outerWidth > 991) {
					window.document.children[0].scrollTop = 0;
				} else {
					window.document.activeElement.scrollTop = 0;
				}

				this.navbar.sidebarClose();
			});

		this.renderer.listen('window', 'scroll', (event) => {
			const num = window.scrollY;

			if ((num > 150 || window.pageYOffset > 150)
				|| this.routingService.getPath() !== '/home') {
				// add logic
				navbar.classList.remove('navbar-transparent');
			} else {
				// remove logic
				navbar.classList.add('navbar-transparent');
			}
		});

		const ua = window.navigator.userAgent;
		const trident = ua.indexOf('Trident/');

		if (trident > 0) {
			// IE 11 => return version number
			const rv = ua.indexOf('rv:');
			var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		if (version) {
			const body = document.getElementsByTagName('body')[0];
			body.classList.add('ie-background');
		}
	}

	removeFooter() {
		let title = this.location.prepareExternalUrl(this.location.path());
		title = title.slice(1);

		if (title === 'signup' || title === 'nucleoicons') {
			return false;
		} else {
			return true;
		}
	}
}
