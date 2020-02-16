import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { JwtUser } from 'src/app/core/authentication/JwtUser';
import { log } from 'util';
import { UserData } from '../models/UserData';
import { WebService } from '../services/web.service';


@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	isCollapsed = false;
	user: JwtUser;
	userData: UserData;
	minecraftUuid: string = this.webSerivce.getMinecraftUuid();

	constructor(private authService: AuthService, private webSerivce: WebService) { }

	ngOnInit() {
		this.user = this.authService.getUser();
		this.userData = this.webSerivce.getUserData();
	}

}
