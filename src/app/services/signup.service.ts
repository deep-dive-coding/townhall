import{Component, ViewChild, OnInit, EventEmitter, Output} from "@angular/core";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable"
import {Profile} from "../classes/profile";
import {Status} from "../classes/status";
import {SignUp} from "../services/signup.service";
declare var $: any;

@Component({
	templateUrl: "./templates/signup-template.php",
	selector: "signup-component"
})

export class SignUpComponent implements OnInit{
	@ViewChild("signUpForm") signUpForm : any;
	profile: Profile = new Profile(null, null, null, "", "", "", "", "", "", null, "", "", "", "");
	status: Status = null;

	constructor(private SignUpService: SignUpService, private router: Router){}

	ngOnInit(): void {
	}

	createProfile() : void {
		this.SignUpService.postSignUp(this.profile)
			.subscribe(status => {
				this.status = status;
				console.log(this.status);
				if(status.status === 200) {
					alert("Please check your email and click the link to activate your account. Thanks!");
					this.signUpForm.reset();
					setTimeout(function(){$("#signup-modal").modal('hide');},500);
					this.router.navigate([""]);
				}
			});
	}
}