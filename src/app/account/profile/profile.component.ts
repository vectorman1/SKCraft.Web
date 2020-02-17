import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { JwtUser } from 'src/app/core/authentication/JwtUser';
import { log } from 'util';
import { UserData } from '../models/UserData';
import { WebService } from '../services/web.service';
import { ApplicationService } from '../services/application.service';
import { Application } from '../models/Application';
import { map } from 'rxjs/operators';
import { Settings } from '../models/Settings';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	isCollapsed = false;
	user: JwtUser = this.authService.getUser();
	userData: UserData;
	applications: Application[];
	settingsError: string;
	settingsSuccess: boolean;
	settingsSubmitted: boolean = false;
	settings: Settings;

	constructor(private authService: AuthService, private webSerivce: WebService, private applicationSerivce: ApplicationService) { }

	initializeUserContents() {
		this.webSerivce.getUserData().subscribe(res => {
			this.userData = res;
			log(JSON.stringify(res))
			this.settings = {
				minecraftName: this.userData.minecraftName ? this.userData.minecraftName : '',
				email: this.userData.email,
				currentPassword: '',
				newPassword: ''
			};
		});

		this.applicationSerivce.getForCurrentUser()
			.pipe(
				map(applications => applications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
			)
			.subscribe(res => {
				this.applications = res;
				log(JSON.stringify(this.applications));
			});
	}

	ngOnInit() {
		this.initializeUserContents();
	}

	onSettingsSubmit() {
		log(JSON.stringify(this.settings))
		this.webSerivce.updateSettings(this.settings).subscribe(
			result => {
				if (result) {
					this.settingsSuccess = true;
					this.initializeUserContents();
				}
			},
			error => {
				this.settingsError = error;
			});
	}
}
