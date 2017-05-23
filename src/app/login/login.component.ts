import { Component }        from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  template: `
    <div class="row">
      <cuppa-oauth [authConfig]="config"></cuppa-oauth>
    </div>`
})
export class LoginComponent {
   private authServerBaseUrl = environment.AUTH_SERVER_URL;
   private googleClientId = environment.GOOGLE_CLIENT_ID;
   
   private config = {
   "loginRoute":"login",
   "linkedin":{
     "authEndpoint": this.authServerBaseUrl+"/auth/linkedin",
     "clientId":"8176r44lz2ewos",
     "redirectURI" : this.authServerBaseUrl+"/admin"
   },
   "facebook":{
     "authEndpoint": this.authServerBaseUrl+"/auth/facebook",
     "clientId":"929055083862567",
     "redirectURI" : this.authServerBaseUrl+"/admin"
   },
   "google":{
     "authEndpoint": this.authServerBaseUrl+"/auth/google",
     "clientId": this.googleClientId,
     "redirectURI" : this.authServerBaseUrl+"/admin"
   }
 };
}
