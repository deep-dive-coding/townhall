import{Component, } from "@angular/core";
import {Router} from "@angular/router";
import {Status} from "../classes/status";
import {SignOutService} from "../services/signout.service";
import {SignInService} from "../services/signin.service";
declare var $: any;

@Component({
	selector: "user-nav",
	templateUrl: "./templates/user-nav.html",
})

export class UserNavComponent {

	status: Status = null;

	constructor(private SignOutService: SignOutService, private SignInService: SignInService, private  router: Router){}

	isSignedIn = false;

	ngOnChanges(): void{
		this.isSignedIn = this.SignInService.isSignedIn;

	}

	signOut() : void {
		this.SignOutService.getSignOut()
			.subscribe(status => {
				this.status = status;

				if(status.status === 200) {
					this.router.navigate(["signout"]);
					this.SignInService.isSignedIn = false;
				}
			});
	}
}