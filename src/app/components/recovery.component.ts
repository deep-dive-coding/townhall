import {Component, Input} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpParams, HttpClient} from '@angular/common/http';
import {Status} from "../classes/status";
import {RecoveryService} from "../services/recovery.service";
import {Recovery} from "../classes/recovery";

@Component({
	templateUrl: "./templates/recovery.html",
})

export class RecoveryComponent {

	recovery: Recovery = new Recovery(null, null, null);
	status: Status = null;

	constructor(private http: HttpClient, private recoveryService: RecoveryService, private router: Router, private route: ActivatedRoute) {
	}

	createRecovery(): void {
		this.route.params.subscribe(params => {
			this.recovery.profileRecoveryToken = params['recovery']
		});
		this.recoveryService.createRecovery(this.recovery)
			.subscribe(status => {
				this.status = status;
				if(this.status.status === 200) {
					alert(this.status.message);
				} else {
					alert(this.status.message);
				}
			});
	}
}