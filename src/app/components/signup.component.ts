/*
this component is for signing up to use the site.
*/

//import needed modules for the sign-up component
import {Component, ViewChild,} from "@angular/core";
import {Router} from "@angular/router";
import {Status} from "../classes/status";
import {SignUpService} from "../services/signup.service";
import {SignUp} from "../classes/signup";
import {setTimeout} from "timers";

//declare $ for good old jquery
declare let $: any;

@Component({
	templateUrl: "./templates/signup.html",
	selector: "sign-up"
})

export class SignUpComponent {

	@ViewChild("signUpForm") signUpForm: any;
	signUp: SignUp = new SignUp("", "", "", "", "", "", "", "", "", "", "");
	status: Status = null;

	constructor(private signUpService: SignUpService,
					private router: Router) {
	}

	createSignUp(): void {
		this.signUpService.createSignUp(this.signUp)
			.subscribe(status => {
				this.status = status;
				console.log(this.status);
				if(status.status === 200) {
					$('#signup-modal').modal('hide');
					alert("Please check your email and follow the link to confirm your account.");
				}
				else alert(status.message);
			});
	}
}