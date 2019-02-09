import { Component } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login-v2';
import {EmailService} from './service/service/email.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-page';
  model: any = {};
  isShow=false;
  constructor( private socialAuthService: AuthService,private emailService : EmailService ) {}

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "linkedin") {
      socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
    
  }


  
    
}
