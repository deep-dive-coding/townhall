import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {allAppComponents, appRoutingProviders, routing} from "./app.routes";
import {PostService} from "./services/post.service";
import {ProfileService}from "./services/profile.service";
import {SignInService} from "./services/signin.service";
import {SignOutService} from "./services/signout.service";
import {SignUpService} from "./services/signup.service";
import {SessionService} from "./services/session.service";
import {CookieService} from "ng2-cookies";


const moduleDeclarations = [AppComponent];

@NgModule({
	imports:      [BrowserModule, FormsModule, HttpModule, routing],
	declarations: [...moduleDeclarations, ...allAppComponents],
	bootstrap:    [AppComponent],
	providers: [appRoutingProviders, PostService, ProfileService, SignInService, SignOutService, SignUpService]})
export class AppModule {	cookieJar : any = {};

	constructor(protected cookieService: CookieService, protected sessionService: SessionService) {}

	run() : void {
				this.sessionService.setSession()
					.subscribe(response => {
							this.cookieJar = this.cookieService.getAll();
							console.log(this.cookieJar);
						});
			}
}