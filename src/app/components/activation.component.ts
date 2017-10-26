import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Status} from "../classes/status";

import {ActivationService} from "../services/activation.service";

@Component({
	templateUrl: "./templates/activation.html",
})

export class ActivationComponent implements OnInit {

	status: Status = null;

	constructor(private activationService: ActivationService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((param: Params) => this.activationService.profileActivationToken(param['activation']))
			.subscribe(status => {
				this.status = status;
				if(this.status.status === 200) {
					console.log("Thank you for activating your account. You can now login.");
					alert(status.message);
					this.router.navigate([""]);
				}
			});

	}
}